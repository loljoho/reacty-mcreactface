import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

class Breadcrumbs extends Component {
  render() {
    const { breadcrumbs } = this.props;

    return (
      <React.Fragment>
        <div className="breadcrumb level-item is-small" aria-label="breadcrumbs">
          <ul>
            {
              breadcrumbs.map((breadcrumb, i) => {
                return <li key={i}><NavLink to={breadcrumb.path} activeClassName="is-active">{breadcrumb.name}</NavLink></li>
              })
            }
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Breadcrumbs;
