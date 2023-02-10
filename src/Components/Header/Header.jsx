import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header className='d-flex justify-content-between align-items-center'>
        <div className="logo">
            <h4>React.org</h4>
        </div>
        <Navbar />
      </header>
    )
  }
}

export default Header