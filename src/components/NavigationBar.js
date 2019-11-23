import React from 'react';
import { Navbar,Nav, Button } from 'react-bootstrap';


export const NavigationBar = () => (
  <Navbar className="navbar navbar-dark fixed-top" id="mainNav">
  <Nav class="container">
    <Navbar.Brand className="navbar-brand js-scroll-trigger" href="#">Cruise Buddy</Navbar.Brand>
    <Navbar.Toggle className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </Navbar.Toggle>
    <Navbar.Collapse className=".collapse.navbar-collapse" >
      <Nav class="navbar-nav text-uppercase ml-auto">
        <Nav.Link className="nav-link js-scroll-trigger" >FIND A CRUISE</Nav.Link>
          <Nav.Link className="nav-link js-scroll-trigger" href="#">LOGIN/REGISTER</Nav.Link>
          <Nav.Link className="nav-link js-scroll-trigger" href="#">About</Nav.Link>
          <Nav.Link className="nav-link js-scroll-trigger" href="#">Team</Nav.Link>
          <Button variant="outline-light">Write a Review</Button>
      </Nav>
    </Navbar.Collapse>
  </Nav>
</Navbar>
)