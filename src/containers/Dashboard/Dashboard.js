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
          isLoaded: true,
          error: error
        });
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
        <div className="container is-fluid">
          <table className="table is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th className="has-text-centered">Season</th>
                <th className="has-text-right"><abbr title="Round">Rnd</abbr></th>
                <th>Race</th>
                <th>Circuit</th>
                <th className="has-text-centered" colSpan="2">Location</th>
                <th className="has-text-centered" colSpan="2">Date/Time</th>
              </tr>
            </thead>
            <tbody>
            {
              rows.map((row, index) => {
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
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default Dashboard;