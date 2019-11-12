import React, { Component } from 'react';
import Table from '../../components/Table/Table';
import API from '../../utils/API';

class Dashboard extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadRaces();
  }

  loadRaces(year = 'current') {
    API.getRaces(year)
      .then(res => {
        if (this._isMounted) {
          this.setState({ 
            data: res,
            isLoaded: true
          })
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error: error
        })
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { data, isLoaded, error } = this.state;

    if (error) {
      return (
        <div className="container">
          ERROR: { error.message }
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container">
          LOADING...
        </div>
      )
    } else {
      console.log(data);
      return (
        <div className="container">
          <Table data={data}
            isLoaded={isLoaded}
            error={error} />
        </div>
      );
    }
  }
}

export default Dashboard;