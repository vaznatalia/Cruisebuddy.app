import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav>
    <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/search">Search</NavLink></li>
      <li><NavLink exact to="/ship">Ship</NavLink></li>
      <li><NavLink exact to="/about">About</NavLink></li>    
    </ul>
  </nav>
)

export default Navbar
