import React, { Component } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {  
    return (
      <table className="table">
        <TableHead />
        <TableBody />
      </table>
    );
  }
}

export default Table;