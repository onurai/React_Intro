import React, { Component } from 'react'
import classes from './Navbar.module.css'
  
export class Navbar extends Component {
  render() {
    return (
      <nav>
        <a className={classes.link} href="">Home</a>
        <a className={classes.link} href="">About</a>
        <a className={classes.link} href="">Blog</a>
        <a className={classes.link} href="">Contact</a>
        <button className={classes.login_btn}>Click</button>
      </nav>
    )
  }
}

export default Navbar