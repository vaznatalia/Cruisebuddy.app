import React, {Component} from 'react';
import Card from './CardUI';




class Cards extends Component {
  render(){
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card imgsrc='../images/heroImage.jpg'title="Title 1"/>
          </div>
          <div className="col-md-4">
            <Card imgsrc='../images/heroImage2.jpg' title="Title 2"/>
          </div>
          <div className="col-md-4">
            <Card imgsrc='../images/heroImage3.jpg'title="Title 3"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;