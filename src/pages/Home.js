import React from "react"
import '../styles/home.css'
import { DropdownButton, Dropdown, Jumbotron,  Container} from 'react-bootstrap'


const Home = () => (
  <div  className="hero-div">

  <Container className="container-fluid" >
  <DropdownButton  variant="light" id="dropdown-basic-button" title="Any destination">
  <Dropdown.Item className="column" href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<DropdownButton  variant="light" id="dropdown-basic-button" title="Any port">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
<DropdownButton variant="light"  id="dropdown-basic-button" title="Any Date">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>

    </Container>
  </div>

)

export default Home