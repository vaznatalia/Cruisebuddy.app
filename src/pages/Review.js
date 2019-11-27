import React from 'react'
import '../styles/Review.css'
import {Form, Button } from 'react-bootstrap'
import {StarRating} from '../components/StarRating';



class Review extends React.Component{


  render(){
  return(
  <div>
    <div className="reviews-img">
      <h1>We’d love to hear your opinion. Your feedback helps 
          fellow cruisers choose the best cruise for their needs.  
          Thank you. </h1> 
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

  </div>
          <div className="main-review-page"> 
               
          <label>Choose Overal Rating</label>
               <StarRating title="" /> 
            <div className="c-2"> 
              <div className="div11">
            <label>Lodging</label>
             <StarRating title="" />
             <label>Dinig</label> 
             <StarRating title="" /> 
             <label>Public Areas</label> 
             <StarRating title="" /> 
             <label>Enterteriment</label> 
             <StarRating title="" /> 
             </div>
             <div className="div22">
             <label>Fitness/Recreation  </label> 
             <StarRating title="" /> 
             <label>Excursions</label> 
             <StarRating title="" /> 
             <label>Service</label> 
             <StarRating title="" /> 
             <label>Value</label> 
             <StarRating title="" /> 
             </div>
            </div>
        
    <div class="form-group-">
        <h1 >Write your review</h1>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
           </div>
     <button  type="submit" class="btn btn-primary btn-lg">Post Review</button>
  </div>
  </div>
  



 )
}
}



export default Review