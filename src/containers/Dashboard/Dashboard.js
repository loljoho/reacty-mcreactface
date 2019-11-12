import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import API from '../../utils/API';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.loadRaces();
    });
  }

  loadRaces(year = 'current') {
    API.getRaces(year)
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }
}

export default Dashboard;