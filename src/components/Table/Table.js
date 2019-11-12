import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    const { data: rows, error, isLoaded } = this.props;

    if (error || !isLoaded) {
      return (
        <table className="table"></table>
      );
    } else {
      return (
        <table className="table">
          <thead>

          </thead>
          <tbody>
          {
              rows.map((row, index) => {
                return (
                  <tr key={index}>
                  {
                    row.map((cell, idx) => <td key="{idx}">{ cell }</td>)
                  }
                  </tr>
                );
              })
          }
          </tbody>
          {/*
          <TableHead headers={headers}/>
          <TableBody rows={rows} />
          */}
        </table>
      );
    }
  }
}

export default Table;