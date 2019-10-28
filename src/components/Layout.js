import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './Navbar';

import {
  Home,
  Dashboard
} from '../containers/';

export class Layout extends Component {
  render() {
    return (
      <div className="App-Layout">
      <Navbar />
          {/* Switchy McSwitchface */}
          <Switch>
            <Route exact path="/" name="Home" component={Home} />
            <Route path="/dashboard" name="Dashboard" component={Dashboard} />
          </Switch>
      </div>
    )
  }
}

export default Layout
