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
      <>
      <div className="search-nav-container"></div>
      <div className="ship-image-cont"> 
        <div className="ship-image-cont-left"> 
          <div className="ship-image" id="left-1"><img src="https://loremflickr.com/500/300" alt="ship"/></div>
        </div>
        <div className="ship-image-cont-right"> 
          <div className="ship-image overlay" id="right-1"><img src="https://loremflickr.com/300/300" alt="ship" /></div>
          <div className="ship-image overlay" id="right-2"><img src="https://loremflickr.com/300/300" alt="ship" /></div>
          <div className="ship-image overlay" id="right-3"><img src="https://loremflickr.com/300/300" alt="ship" /></div>
          <div className="ship-image overlay" id="right-4"><img src="https://loremflickr.com/300/300" alt="ship" /></div>
        </div>
      </div>
      </>
    )
  }
}
export default Ship