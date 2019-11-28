import React from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Gallery from '../components/Gallery'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 


class Ship extends React.Component {
      state = {
      photoIndex: 0,
      isOpen: false,
      ship: {},
      averageRating:0
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
    const averageRating = data.reviews.reduce((acc, review ) => acc + review.rating, 0) / data.reviews.length
    this.setState({ship: data, averageRating })
  }

    



  render(){
    console.log(this.state.averageRating)
    const { ship } = this.state;
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
            <p>Rating:</p>
           

          </div>

      </>
    )
  }
}
export default Ship

