import React from "react"
import axios from 'axios';

class Ship extends React.Component {
  state = { 
    ship: {}
  }
  componentDidMount() {
    this.fetchShip()
  }

  fetchShip = async () => {
    const shipId = this.props.match.params.id;
    const { data } = await axios.get(
      `http://localhost:4000/ships/${shipId}`,
      { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('AUTH_TOKEN') }

    )
    this.setState({ship: data })
  }



  render(){
    console.log(this.state)
    return (
    <h1>Ship</h1>

    )
  }
}
export default Ship