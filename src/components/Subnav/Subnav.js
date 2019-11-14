import React, { Component } from 'react';
// import {
//   NavLink
// } from 'react-router-dom';

import Filter from './Filter';
import Breadcrumbs from './Breadcrumbs';

class Subnav extends Component {
  constructor(props) {
    super(props);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleYearChange(minYear) {
    console.log(`Subnav handleYearChange(${minYear})`);
  }

  render() {
    const { breadcrumbs } = this.props;

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
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            <div className="level-right">
              <div className="field level-item">
                <Filter minYear="2012" 
                  onValueChange={this.handleYearChange} />
              </div>
            </div>

          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Subnav;
