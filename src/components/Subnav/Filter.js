import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { minYear } = this.props;
    const years = [];
    
    for(let i = new Date().getFullYear(); i >= minYear; i--) {
      years.push(i);
    }

    return (
      <React.Fragment>
        <div className="control">
            <div className="select is-primary is-small">
              <select>
                {years.map(year => {
                  return <option key={year} value={year}>{year}</option>
                })}
              </select>
            </div>
          </div>   
      </React.Fragment>
    )
  }
}

export default Filter;
