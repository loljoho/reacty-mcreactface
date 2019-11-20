import React, { Component } from 'react'
import moment from 'moment';
import Flags from '../../utils/Flags';

class TableRow extends Component {
  render() {
    let flag = Flags.getByCountry(this.props.data.Circuit.Location.country).iso2;
    let date = moment(`${this.props.data.date}T${this.props.data.time}`);
    let maps = encodeURI(`https://google.com/maps/search/?api=1&query=${this.props.data.Circuit.Location.lat},${this.props.data.Circuit.Location.long}`);
    return (
      <tr> 
        <td className="has-text-centered">{ this.props.data.season }</td>
          <td className="has-text-right">{ this.props.data.round }</td>
          <td><a href="/">{ this.props.data.raceName }</a></td>
          <td>
            <a href={maps} rel="noopener noreferrer" target="_blank">
              { this.props.data.Circuit.circuitName }
            </a>
          </td>
          <td>
            { this.props.data.Circuit.Location.locality }
          </td>
          <td>
            <span className={`flag-icon flag-icon-${flag}`} title={ this.props.data.Circuit.Location.country }></span>
          </td>
          <td>{ date.format('YYYY MMM DD') }</td>
          <td className="has-text-centered">{ date.format('HH:mm') }</td>
      </tr>
    );
  }
}

export default TableRow;