import React, { Component } from 'react';
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
              <a className="navbar-item" href="#">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <a className="navbar-item" href="#">
                About
              </a>
              <a className="navbar-item" href="#">
                Halp
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navbar;
