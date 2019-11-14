import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import Filter from './Filter';

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
              <div className="breadcrumb level-item is-small" aria-label="breadcrumbs">
                <ul>
                  {
                    breadcrumbs.map((breadcrumb, i) => {
                      return <li><NavLink to={breadcrumb.path} activeClassName="is-active">{breadcrumb.name}</NavLink></li>
                    })
                  }
                </ul>
              </div>
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
