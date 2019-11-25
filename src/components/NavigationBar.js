import React from 'react';
import { Navbar,Nav, Button } from 'react-bootstrap';


export const NavigationBar = () => (
  <Navbar className="navbar navbar-dark" bg="dark" id="mainNav" >
  <Nav class="container" >
    <Navbar.Brand className="navbar-brand js-scroll-trigger" href="#">Cruisebuddy</Navbar.Brand>
    <Navbar.Toggle className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </Navbar.Toggle>
    <Navbar.Collapse className=".collapse.navbar-collapse" >
      <Nav class="navbar-nav text-uppercase ml-auto">
        <Nav.Link className="nav-link js-scroll-trigger" >Find a Cruise</Nav.Link>
          <Nav.Link className="nav-link js-scroll-trigger" href="#">Log-in</Nav.Link>
          <Button variant="outline-light">Write a Review</Button>
      </Nav>
    </Navbar.Collapse>
  </Nav>
</Navbar>
)