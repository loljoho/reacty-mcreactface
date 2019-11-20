import React, { Component } from 'react';

class DataTable extends Component {

  render() {
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
                {this.props.children}
              </tbody>
            </table>
          </div>
        </div>
      );
    //}
  }
}

export default DataTable;