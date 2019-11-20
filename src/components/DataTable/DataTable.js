import React, { Component } from 'react';

class DataTable extends Component {

  render() {
      console.table(this.props.data);
      return (
        <div className="container is-fluid">
          <div className="table-container">
            <table className="table is-hoverable">
              {this.props.children}
            </table>
          </div>
        </div>
      );
    //}
  }
}

export default DataTable;