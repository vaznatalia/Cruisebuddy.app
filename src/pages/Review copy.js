import React from 'react'
import '../styles/Review.css'
import {Form } from 'react-bootstrap'
import StarRating from '../components/StarRating';
import classNames from 'classnames';





  class Review extends React.Component{
    state={
      fitnessRating : "1",
      lodging : "1",
      excursions : "1",
      dining : "1",
      service : "1", 
      publicAreas : "1",
      value: "1",
      entertainmentRating : "1",
      avgRating: 0,
    }
    handleRatingSelection = stateId => val => {
      const { avgRating: _, ...otherState } = this.state;
      const ratings = Object.values({ ...otherState, [stateId]: val });
      const averageRating = Math.ceil(ratings.reduce((acc, rating) => acc + +rating, 0) / ratings.length);
      this.setState({ [stateId]: val, averageRating });
    }
    render(){
      const { averageRating } = this.state;
    const categories = [
    {0.5: 'Useless'},
    {1: 'Useless+'},
    {1.5: 'Poor'},
    {2: 'Poor+'},
    {2.5: 'Ok'},
    {3: 'Ok+'},
    {3.5: 'Good'},
    {4: 'Good+'},
    {4.5: 'Excellent'},
    {5: 'Excellent+'},

  return(
    <div>
    
        <StarRating value={averageRating} />
           
            {categories.map(({ value, label }) => (
              <div>
                <label>{label}</label>
                <StarRating category={value} value={this.state[value]} handleRating={this.handleRatingSelection(value)} />
              </div>
              ))}
             </div>
             
     
    )
    
  
export default Review