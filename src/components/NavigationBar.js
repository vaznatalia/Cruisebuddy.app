import React from 'react';
import { Nav, Navbar,Button,Form,FormControl} from 'react-bootstrap';




export const NavigationBar = () => (
  <Nav className="header-hero">
  <Navbar className="mx-5" bg="navbar hidden navbar   fixed-top" expand="lg">
    <Navbar.Brand href="#home">Cruise Buddy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse expand="lg" id="basic-navbar-nav">
      <Nav className="mx-auto">
      <Nav.Link className="mx-5" href="#home">About</Nav.Link>
        <Nav.Link className="mx-5" href="#home">Find a Cruise</Nav.Link>
        <Nav.Link className="mx-5" href="#link">Log in/Register</Nav.Link>
        <Button className="mx-5" variant="outline-light">Write a Review</Button>
      </Nav>    
    </Navbar.Collapse>
  </Navbar>
  </Nav>
 
  

)