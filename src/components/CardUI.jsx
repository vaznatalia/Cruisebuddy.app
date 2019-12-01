import React from 'react';
import heroImage from '../images/heroImage.jpg';
import '../styles/card-style.css'

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={heroImage} alt="Image 1" className="card-img-top"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum blah blah blah
        </p>
        <a href="#" className="btn btn-outline-success">Go Anywhere</a>
      </div>
    </div>
  )
}

export default Card;