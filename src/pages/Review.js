import React from 'react'
import '../styles/Review.css'
import {Form } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';



class Review extends React.Component{


  render(){
  return(
    <div>
    <div className="reviews-img">
    <h1>We’d love to hear your opinion. 
      Your feedback helps fellow cruisers choose the best cruise for their needs. 
      Thank you.</h1> 
  <Form className="review-input">
     <div controlId="formGrid">
      <Form.Label>Witch ship were you on?</Form.Label>
       <Form.Control placeholder="Begin typing your ship name…" />
         </div>

         <div controlId="formGrid">
               <Form.Label>Which itinerary did you go on?</Form.Label>
                 <Form.Control placeholder="Itinerary" />
                  </div>
           <div controlId="formGrid">
               <Form.Label>On which dates did you cruise?</Form.Label>
                 <Form.Control type="date" placeholder="" />
                  </div>
   </Form>
     <h1>Rate item by item:</h1>
     
     

  </div>
  </div>
 )
}
}



export default Review