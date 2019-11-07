import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().getFullYear()
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    const { minYear } = this.props;
    const { value } = this.state;
    const years = [];
    
    for(let i = value; i >= minYear; i--) {
      years.push(i);
    }

    return (
      <React.Fragment>
        <div className="control">
            <div className="select is-primary is-small">
              <select onChange={this.handleChange} value={value}>
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
