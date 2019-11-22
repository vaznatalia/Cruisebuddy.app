import React from "react"
import { Container, Form, Button, FormControl } from "react-bootstrap"
import '../styles/home.css'

export const Home = () => (
  <Container>
    <div className="hero-div">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </div>

  </Container>
)








export default Home