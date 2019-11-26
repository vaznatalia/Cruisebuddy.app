import React from 'react'
import '../styles/Review.css'
import {Form } from 'react-bootstrap'
import StarRating from '../components/StarRating';



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
  <div > 
              <h1>Choose overall Rating</h1>

              <div className="star-rating">
              <input type="radio" id="5-stars" name="rating" value="5" />
              <label for="5-stars" class="star">&#9733;</label>
              <input type="radio" id="4-stars" name="rating" value="4" />
              <label for="4-stars" class="star">&#9733;</label>
              <input type="radio" id="3-stars" name="rating" value="3" />
              <label for="3-stars" class="star">&#9733;</label>
              <input type="radio" id="2-stars" name="rating" value="2" />
              <label for="2-stars" class="star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" class="star">&#9733;</label>
              </div>
              <h1>Rating item by item</h1>

              <div className="star-rating">
              <span>Loding</span>
              <input type="radio" id="5-stars" name="rating" value="5" />
              <label for="5-stars" class="star">&#9733;</label>
              <input type="radio" id="4-stars" name="rating" value="4" />
              <label for="4-stars" class="star">&#9733;</label>
              <input type="radio" id="3-stars" name="rating" value="3" />
              <label for="3-stars" class="star">&#9733;</label>
              <input type="radio" id="2-stars" name="rating" value="2" />
              <label for="2-stars" class="star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" class="star">&#9733;</label>
              </div>
              <div className="star-rating">
              <span>Dining</span>
              <input type="radio" id="5-stars" name="rating" value="5" />
              <label for="5-stars" class="star">&#9733;</label>
              <input type="radio" id="4-stars" name="rating" value="4" />
              <label for="4-stars" class="star">&#9733;</label>
              <input type="radio" id="3-stars" name="rating" value="3" />
              <label for="3-stars" class="star">&#9733;</label>
              <input type="radio" id="2-stars" name="rating" value="2" />
              <label for="2-stars" class="star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" class="star">&#9733;</label>
              </div>
              </div>
              <div className="star-rating">
              <span>Dining</span>
              <input type="radio" id="5-stars" name="rating" value="5" />
              <label for="5-stars" class="star">&#9733;</label>
              <input type="radio" id="4-stars" name="rating" value="4" />
              <label for="4-stars" class="star">&#9733;</label>
              <input type="radio" id="3-stars" name="rating" value="3" />
              <label for="3-stars" class="star">&#9733;</label>
              <input type="radio" id="2-stars" name="rating" value="2" />
              <label for="2-stars" class="star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" />
              <label for="1-star" class="star">&#9733;</label>
              </div>
              </div>
              



 )
}
}



export default Review