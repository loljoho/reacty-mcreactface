import React, { Component } from 'react';
import moment from 'moment';
import Flags from '../../utils/Flags';

class DataTable extends Component {

  render() {
    // if (this.props.error) {
    //   return (
    //     <div className="container">
    //       ERROR: { this.props.error.message }
    //     </div>
    //   );
    // } else if (!this.props.isLoaded) {
    //   return (
    //     <div className="container">
    //       LOADING...
    //     </div>
    //   )
    // } else {
      console.table(this.props.data);
      return (
        <div className="container is-fluid">
          <div className="table-container">
            <table className="table is-hoverable">
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
                this.props.data.map((row, index) => {
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
        </div>
      );
    //}
  }
}

export default DataTable;