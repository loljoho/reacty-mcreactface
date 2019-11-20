import React, { Component } from 'react';
import { 
  DataTable,
  TableRow 
} from '../../components/DataTable/';
import moment from 'moment';
import API from '../../utils/API';
import Flags from '../../utils/Flags';

class Home extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadRaces();
  }

  loadRaces(year = 'current') {
    API.getResults(year)
      .then(res => {
        if (this._isMounted) {
          this.setState({ 
            data: res,
            isLoaded: true
          });
        }
      })
      .catch(error => {
        this.setState({
          data: [],
          isLoaded: true,
          error: error
        });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log('Rendering Home...');
    if (this.state.error) {
      return <h4 className="is-size-4	has-text-centered has-text-warning">ERROR: { this.props.error.message }</h4>;
    } else if (!this.state.isLoaded) {
      return <h4 className="is-size-4	has-text-centered has-text-dark">LOADING...</h4>;
    } else {
      return (
        <DataTable data={this.state.data} 
          isLoaded={this.state.isLoaded} 
          error={this.state.error}>
            {
              this.state.data.map((row, index) => {
                let flag = Flags.getByCountry(row.Circuit.Location.country).iso2;
                let date = moment(`${row.date}T${row.time}`);
                let maps = encodeURI(`https://google.com/maps/search/?api=1&query=${row.Circuit.Location.lat},${row.Circuit.Location.long}`);
                return (
                  <tr key={index}>
                    <td className="has-text-centered">{ row.season }</td>
                    <td className="has-text-right">{ row.round }</td>
                    <td><a href="/">{ row.raceName }</a></td>
                    <td>
                      <a href={maps} rel="noopener noreferrer" target="_blank">
                        { row.Circuit.circuitName }
                      </a>
                    </td>
                    <td>
                      { row.Circuit.Location.locality }
                    </td>
                    <td>
                      <span className={`flag-icon flag-icon-${flag}`} title={ row.Circuit.Location.country }></span>
                    </td>
                    <td>{ date.format('YYYY MMM DD') }</td>
                    <td className="has-text-centered">{ date.format('HH:mm') }</td>
                  </tr>
                );
              })
            }
        </DataTable>
      );  
    }
  }
}

export default Home;