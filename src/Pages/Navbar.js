import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div id='nav' className='text-center'>
        <Link to='/' className='mx-4' style={{fontSize: "30px"}}>Main</Link>
        <Link to='/About' className='mx-4' style={{fontSize: "30px"}}>About</Link>
        <Link to='Contact' className='mx-4' style={{fontSize: "30px"}}>Contact</Link>
        <Link to='UseState' className='mx-4' style={{fontSize: "30px"}}>UseState</Link>
        <Link to='UseEffect' className='mx-4' style={{fontSize: "30px"}}>UseEffect</Link>
      </div>
    )
  }
}

export default Navbar