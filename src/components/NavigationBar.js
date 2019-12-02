import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Navbar,Nav, Button } from 'react-bootstrap';


class NavigationBar extends Component {

  render() {
    return (

      <Navbar className="navbar navbar-dark" id="mainNav">
        <Nav class="container">
          <Link to="/"><Navbar.Brand className="navbar-brand pt-0">Cruisebuddy</Navbar.Brand></Link>
          <Nav class="navbar-nav  ml-auto mt-auto">
          <Nav.Link className="nav-link nav-text-right mt-4 pt-3" >Find a Cruise</Nav.Link>
          <Nav.Link className="nav-link nav-text-right mt-4 pt-3" href="#">Log in/Register</Nav.Link>
          <Nav.Link className="nav-link nav-text-right mt-4 pt-3" href="#">About</Nav.Link>
          <Nav.Link className="nav-link nav-text-right mt-4 pt-3" href="#">Team</Nav.Link>
          <Nav.Link className="nav-link nav-text-right mt-3 pt-0" href="/Review"><Button variant="outline-light btn-sm">Write a Review</Button></Nav.Link>
        </Nav>
      </Nav>
</Navbar>
     
    )
  }
}

export default NavigationBar;