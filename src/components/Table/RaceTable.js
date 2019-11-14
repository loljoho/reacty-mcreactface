import React, { Component } from 'react';
import API from '../../utils/API';

class RaceTable extends Component {
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
        <div className="container">
          <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
            {
              rows.map((row, index) => {
                return (
                  <tr key={index}>
                    <td>{ row.season }</td>
                    <td>{ row.round }</td>
                    <td>{ row.raceName }</td>
                    <td>{ row.Circuit.circuitName }</td>
                    <td>{ row.Circuit.Location.locality }, { row.Circuit.Location.country }</td>
                    <td>{ row.date } { row.time }</td>
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

export default RaceTable;