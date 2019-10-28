import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from '../logo.png';

class Navbar extends Component {
  render = () => {
    return (
      <nav className="navbar is-fixed-top is-transparent">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={logo} alt="Reacty McReactface" />
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" href="#">
                Home
              </Link>
            </div>

            <div className="navbar-end">
              <Link className="navbar-item" href="#">
                About
              </Link>
              <Link className="navbar-item" href="#">
                Halp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navbar;
