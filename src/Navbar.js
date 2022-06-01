import React from 'react'
import logo from "./logo.svg"
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className='Nav'>
    <img src={logo}/>
    <div>
        <button className='style1'>About</button>
        <button className='style1'>How it Works</button>
        <button className='style1'>Pricing</button>
        <button className='style1'>Solutions</button>
        <button className='style1'>Features</button>
    </div>
    <div>
        <button className='style1'>Login</button>
        <button className='style2'>Register</button>
    </div>
    </div>
  )
}
