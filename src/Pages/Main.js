import React, { Component } from 'react'

export class Main extends Component {
  state={
    username:'',
    password: ''
  }

  NameHandler = (e) =>{
      this.setState({
        username: e.target.value
      })
  }
  PassHandler = (e) =>{
    this.setState({
      password: e.target.value
    })
  }


  render() {
    return (
      <div>
          <input onChange={this.NameHandler} type="text" placeholder='UserName...'/>
          <input onChange={this.PassHandler} type="password" placeholder='Password...'/>
          <button onClick={this.LoginHAndler}>Add</button>
      </div>
    )
  }
}

export default Main