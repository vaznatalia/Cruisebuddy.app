import React from 'react';
import heroImage from '../images/heroImage.jpg';
import '../styles/card-style.css'

const Card = props => {
  return (
    <div className="card text-center review-group-body">
      <div className="overflow">
        <img src={heroImage} alt="Ship" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lsadnfkjasdfkjab
        </p>
        <a href="#" className="btn btn-outline-success">See Itineraries</a>
      </div>
    </div>
  )
}

export default Card;