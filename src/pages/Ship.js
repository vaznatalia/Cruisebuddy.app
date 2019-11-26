import React from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 

const images = [
  'https://loremflickr.com/1000/500',
  'https://loremflickr.com/1000/500',
  'https://loremflickr.com/1000/500',
  'https://loremflickr.com/1000/500',
];

class Ship extends React.Component {
  state = { 
    ship: {}
  }
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
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
    const { photoIndex, isOpen } = this.state;
    const image1 = 'https://loremflickr.com/500/400'
    const image2 = 'https://loremflickr.com/500/400'
    const image3 = 'https://loremflickr.com/500/400'
    const image4 = 'https://loremflickr.com/500/400'
    const image5 = 'https://loremflickr.com/500/400'
    return (
      
      <>
      <div className="carousel-wrapper">
      <Gallery />
      
      <div className="button-wrapper ">
      <button type="button" className="btn btn-light" onClick={() => this.setState({ isOpen: true })}>
            View More Photos
          </button>
  
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}
          </div>
          </div>
      </>
    )
  }
}
export default Ship

