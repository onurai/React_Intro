import React, { Component } from 'react'

export class About extends Component {
  state={
    option:''
  }

  OptionHandler = (e) =>{
    this.setState({
      option: e.target.value
    })
  }

  render() {
    const {option} = this.state
    return (
      <div>
        <select onChange={this.OptionHandler} name='' id=''>
          <option value='Morning'>Morning</option>
          <option value='AfterNoon'>AfterNoon</option>
          <option value='Evening'>Evening</option>
        </select>

        <h1 style={option==="Morning" ? {"color": "green"}: {"color": "violet"}}>Time Period: {option}</h1>
      </div>
    )
  }
}

export default About