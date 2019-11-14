import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Subnav from '../Subnav/Subnav';

import {
  Home,
  Dashboard,
  Results,
  Races,
} from '../../containers';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Subnav />
        {/* Switchy McSwitchface */}
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route path="/results" name="Results" component={Results} />
          <Route path="/races" name="Races" component={Races} />
          <Route path="/dashboard" name="Dashboard" component={Dashboard} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Layout;
