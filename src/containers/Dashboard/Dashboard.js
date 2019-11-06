import React, { Component } from 'react';
import logo from '../../logo.png';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data : null
    };
  }

  componentDidMount() {
    fetch('../data/2019-09-03_2019-10-07/channels.json')
      .then(response => {
        console.info(response.json());
      }).then(data => {
        this.setState({ data });
      });
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