import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Subnav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="subnav level has-background-white-bis">
          <div className="container">
            <div className="breadcrumb level-left is-small" aria-label="breadcrumbs">
              <ul>
                <li>
                  <NavLink to="/home" activeClassName="is-active">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="/drivers" activeClassName="is-active">Drivers</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Subnav;
