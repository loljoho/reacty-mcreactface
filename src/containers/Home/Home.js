import React, { Component } from 'react';
import { 
  DataTable,
  TableRow 
} from '../../components/DataTable/';
import API from '../../utils/API';

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
              return (
                <TableRow key={index} data={row} />
              );
            })
          }
        </DataTable>
      );  
    }
  }
}

export default Home;