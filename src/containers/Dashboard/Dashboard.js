import React, { Component } from 'react';
import moment from 'moment';
//import Table from '../../components/Table/Table';
import API from '../../utils/API';
import Flags from '../../utils/Flags';

class Dashboard extends Component {
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
    API.getRaces(year)
      .then(res => {
        if (this._isMounted) {
          this.setState({ 
            data: res,
            isLoaded: true
          })
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        })
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { data: rows, isLoaded, error } = this.state;

    if (error) {
      return (
        <div className="container">
          ERROR: { error.message }
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container">
          LOADING...
        </div>
      )
    } else {
      console.log(rows);
      return (
        <div className="container">
          <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
            {
              rows.map((row, index) => {
                let flag = Flags.getByCountry(row.Circuit.Location.country).iso2;
                let date = moment(`${row.date}T${row.time}`);
                let maps = encodeURI(`https://google.com/maps/search/?api=1&query=${row.Circuit.Location.lat},${row.Circuit.Location.long}`);
                return (
                  <tr key={index}>
                    <td>{ row.season }</td>
                    <td>{ row.round }</td>
                    <td>{ row.raceName }</td>
                    <td>
                      <a href={maps} rel="noopener noreferrer" target="_blank">
                        { row.Circuit.circuitName }
                      </a>
                    </td>
                    <td>
                      <span className={`flag-icon flag-icon-${flag}`}></span>
                    </td>
                    <td>{ row.Circuit.Location.locality }</td>
                    <td>{ date.format('YYYY MMM DD') }</td>
                    <td>{ date.format('HH:mm:ss') }</td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Dashboard;