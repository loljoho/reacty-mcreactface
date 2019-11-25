import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
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
    const breadcrumbs = [
      {
        name: 'Home',
        path: '/home'
      },
      {
        name: 'Dashboard',
        path: '/dashboard'
      },
      {
        name: 'Drivers',
        path: '/drivers'
      }
    ];

    return (
      <React.Fragment>
        <Navbar />
        <Subnav breadcrumbs={breadcrumbs} />
        {/* Switchy McSwitchface */}
        <Switch>
          <Route exact path="/" name="Home" component={Home} />
          <Route path="/dashboard" name="Dashboard" component={Dashboard} />
          <Route path="/results" name="Results" component={Results} />
          <Route path="/races" name="Races" component={Races} />
          <Redirect from="/" to="/" />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Layout;
