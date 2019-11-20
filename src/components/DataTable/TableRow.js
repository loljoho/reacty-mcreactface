import React from 'react'

export default function TableRow() {
  return (
    <tr> 
      <td className="has-text-centered">{ this.props.row.season }</td>
        <td className="has-text-right">{ this.props.row.round }</td>
        <td><a href="/">{ this.props.row.raceName }</a></td>
        <td>
          <a href={this.props.maps} rel="noopener noreferrer" target="_blank">
            { this.props.row.Circuit.circuitName }
          </a>
        </td>
        <td>
          { this.props.row.Circuit.Location.locality }
        </td>
        <td>
          <span className={`this.props.flag-icon this.props.flag-icon-${this.props.flag}`} title={ this.props.row.Circuit.Location.country }></span>
        </td>
        <td>{ this.props.date.format('YYYY MMM DD') }</td>
        <td className="has-text-centered">{ this.props.date.format('HH:mm') }</td>
    </tr>
  );
}