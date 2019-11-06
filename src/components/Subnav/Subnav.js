import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import Filter from './Filter';

class Subnav extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="subnav has-background-white-bis">
          <div className="container level">

            {/*
            <div class="level-left control is-small"> is-loading has-icons-right
              <input class="input is-small" type="text" placeholder="Small loading input" />
            </div>
            */}

            <div className="level-left">
              <div className="breadcrumb level-item is-small" aria-label="breadcrumbs">
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

            <div className="level-right">
              <div className="field level-item">
                <Filter minYear="2012" />
              </div>
            </div>

          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Subnav;
