import React, { Component } from 'react';

class TableHead extends Component {
  render() {
      return (
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
      );
    //}
  }
}

export default TableHead;