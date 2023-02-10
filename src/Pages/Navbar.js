import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div id='nav' className='text-center h-auto bg-warning'>
        <Link to='/' className='mx-4 text-danger' style={{fontSize: "30px"}}>Main</Link>
        <Link to='/About' className='mx-4 text-transparent' style={{fontSize: "30px"}}>About</Link>
        <Link to='Contact' className='mx-4 text-success' style={{fontSize: "30px"}}>Contact</Link>
      </div>
    )
  }
}

export default Navbar