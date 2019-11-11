import React, { Component } from 'react';
import API from '../../utils/API';
import logo from '../../logo.png';

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
      <div className="App__inner">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DASH BERLIN BOARD
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dashy McDashface
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          DASH BERLIN BOARD
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dashy McDashface
        </a>
      </div>
    );
  }
}

export default Dashboard;