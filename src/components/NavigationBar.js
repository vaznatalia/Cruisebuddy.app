import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap';

class NavigationBar extends Component {

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-l">
          <NavLink exact to="/" className="logo">Cruisebuddy</NavLink>
        </div>
        <div className="navbar-r">
            <NavLink exact to="/SubmitReview" className="logo">
              Write a Review
             </NavLink>
        </div>
      </nav>
    )
  }
}

export default NavigationBar;