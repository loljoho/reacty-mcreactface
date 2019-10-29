import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import logo from '../logo.png';

class Navbar extends Component {
  render = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logo} alt="Reacty McReactface" />
          </Link>
          <div className="navbar-burger burger" data-target="siteNavbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="siteNavbar" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/dashboard">
              Dashboard
            </Link>
          </div>

          <div className="navbar-end">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/halp">
              Halp
            </Link>
          </div>
        </div>
      </nav>
    );
  };
}

export default Navbar;
