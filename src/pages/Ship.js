import React from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Gallery from '../components/Gallery'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Description } from '../components/Description';
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";



class Ship extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    ship: {},
    text: ''
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
    this.setState({ ship: data })
  }




  render() {
    
    const { ship } = this.state;
    console.log("this state", ship)
    const { ship_images = [] } = ship;
    const { photoIndex, isOpen } = this.state;
    const mainSrc = get(ship_images, [photoIndex, 'url'], '');
    const nextSrc = get(ship_images, [(photoIndex + 1) % ship_images.length, 'url'], '')
    const prevSrc = get(ship_images, [(photoIndex + ship_images.length - 1) % ship_images.length, 'url'], '');
    return (
      <>
        <div className="carousel-wrapper">
          <Gallery key={ship_images.length} shipImages={ship_images} />

          <div className="button-wrapper ">
            <button type="button" className="btn btn-light" onClick={() => this.setState({ isOpen: true })}>
              View More
          </button>
            {isOpen && (
              <Lightbox
                mainSrc={mainSrc}
                nextSrc={nextSrc}
                prevSrc={prevSrc}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + ship_images.length - 1) % ship_images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % ship_images.length,
                  })
                }
              />
              
             
          )}
          </div>
        </div>
        <div className="ship-rating">
         
        <div>
            <h1>{ get(ship.cruise_line, "name", "")} {ship.name}</h1>
            {/* <h1>{ get(ship.cruise_line, "name", "") }</h1> */}
       
            <div className="ship-description">{ get(ship, "description", "")}</div>
              
                <h1>Reviews</h1>

                                {
                  ship.reviews && ship.reviews.map(review => {
                    return(
                      <>
                    <p>{review.rating}</p>
                    <p>{review.body}</p>
                  </>
                    )
                  })
                }
                

        </div>


        </div>


      </>
    )
  }
}
export default Ship

