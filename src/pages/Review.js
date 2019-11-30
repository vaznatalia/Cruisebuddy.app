import React from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import '../styles/Review.css'
import StarRating from '../components/StarRating';
import MyDropzone from '../components/MyDropzone'

const CATEGORIES = [
  { label: 'Fitnesss Rating', value: 'fitnessRating' },
  { label: 'Lodging', value: 'lodging' },
  { label: 'Excursions', value: 'excursions' },
  { label: 'Dining', value: 'dining' },
  { label: 'Service', value: 'service' },
  { label: 'Public Areas', value: 'publicAreas' },
  { label: 'Value', value: 'value' },
  { label: 'Entertainment', value: 'entertainmentRating'},
]


  class Review extends React.Component{
    static contextType = AuthContext
    state={
      categories: {
        fitnessRating : "1",
        lodging : "1",
        excursions : "1",
        dining : "1",
        service : "1", 
        publicAreas : "1",
        value: "1",
        entertainmentRating : "1",
      },
      averageRating: 0,
      shipName: '',
      reviewBody: '',
    }

    handleInputChange = field => e => this.setState({ [field]: e.target.value })

    handleRatingSelection = stateId => val => {
      const { categories } = this.state;
      const newCategories = { ...categories, [stateId]: val };
      const ratings = Object.values(newCategories);
      const averageRating = Math.ceil(ratings.reduce((acc, rating) => acc + +rating, 0) / ratings.length);
      this.setState({ categories: newCategories, averageRating });
    }

    handleSubmitReview = async e => {
      e.preventDefault();
      const { shipName, averageRating, reviewBody } = this.state;
      await axios.post('http://localhost:4000/reviews', { shipName, review: { body: reviewBody, rating: averageRating } }, { headers: { Authorization: this.context.token } })
      

    }

    render(){
      const { averageRating, categories } = this.state;

  return(
    <div>
    <div className="reviews-img">
      <h1>We'd love to hear your opinion. Your feedback helps 
          fellow cruisers choose the best cruise for their needs.  
          Thank you. </h1> 
          <Form className="review-input">
            <div controlId="formGrid">
              <Form.Label>Which ship were you on?</Form.Label>
              <Form.Control onChange={this.handleInputChange('shipName')} placeholder="Begin typing your ship name…" />
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
          <StarRating value={averageRating} />
            {CATEGORIES.map(({ value, label }) => (
              <div>
                <label>{label}</label>
                <StarRating category={value} value={categories[value]} handleRating={this.handleRatingSelection(value)} />
              </div>
              ))}
         </div> 
         <div className="revew-text-area">
         <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control onChange={this.handleInputChange('reviewBody')} as="textarea" rows="3" />
          </Form.Group>
          </div>
          <button onClick={this.handleSubmitReview}>Submit Review</button>
            <div className="review-dropzone">
          <MyDropzone />
          </div>
         </div>
    )
  }
}
export default Review