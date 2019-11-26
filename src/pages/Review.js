import React from 'react'
import '../styles/Review.css'
import {Form } from 'react-bootstrap'


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


  </div>

  </div>

  )
}
}

{/* <Form>
        <Form.Row>
         <Form.Group  as={Row} controlId="formGroupEmail">
           <Form.Label>Witch ship were you on?</Form.Label>
             <Form size="sm" type="text" placeholder="Begin typing your ship name…" />
          </Form.Group>
          </Form.Row>
          </Form>  */}
            
      {/* <div className="user-input"> 
        <label>Witch ship were you on?</label>
        <input/>
      </div>
      <div> 
      Which itinerary did you go on?
        <input/>
      </div>
      <div> 
      On which dates did you cruise?
      <input/>
      </div> */}


export default Review