import React from 'react';
import axios from 'axios';
import { get } from 'lodash';
import Gallery from '../components/Gallery';
import StarRating from '../components/StarRating';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import 'semantic-ui-css/semantic.min.css';
import "../styles/ship.css";
import "../styles/commentgroup.css";


import { Button, Comment, Form, Header, List, Container } from 'semantic-ui-react'
import ReactDOM from "react-dom";


class Ship extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    ship: {},
    text: ''
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
    this.setState({ ship: data })
  }




  render() {
    
    const { ship } = this.state;
    console.log("this state", ship)
    const { ship_images = [] } = ship;
    const { photoIndex, isOpen } = this.state;
    const mainSrc = get(ship_images, [photoIndex, 'url'], '');
    const nextSrc = get(ship_images, [(photoIndex + 1) % ship_images.length, 'url'], '')
    const prevSrc = get(ship_images, [(photoIndex + ship_images.length - 1) % ship_images.length, 'url'], '');
    return (
      <>
        <div className="carousel-wrapper">
          <Gallery key={ship_images.length} shipImages={ship_images} />

          <div className="button-wrapper ">
            <button type="button" className="btn btn-light" onClick={() => this.setState({ isOpen: true })}>
              View More
          </button>
            {isOpen && (
              <Lightbox
                mainSrc={mainSrc}
                nextSrc={nextSrc}
                prevSrc={prevSrc}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + ship_images.length - 1) % ship_images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % ship_images.length,
                  })
                }
              />
              
             
          )}
          </div>
        </div>
        <div className="ship-rating">
         
        <div>
            <h1>{ get(ship.cruise_line, "name", "")} {ship.name}</h1>
            {/* <h1>{ get(ship.cruise_line, "name", "") }</h1> */}
       
            <div className="ship-description">{ get(ship, "description", "")}</div>

            <div class="reviews-header">
               <h2 class="ui header">Reviews</h2>
            </div>

                                {
                  ship.reviews && ship.reviews.map(review => {
                    return(
                      
                      <div className="review-group-body">
                    <Comment.Group className="review-group">
                    <Comment className="comment-comment">
    
                    <Comment.Avatar className="comment-avatar" src='https://picsum.photos/200/300?random=1' />
                    <Comment.Content className="comment-content">
                    <Comment.Author className="comment-author" as='a'>{review.user_profile.first_name}</Comment.Author>
                    <Comment.Metadata className="comment-metadata">
                    <div>{review.user_profile.created_at}</div>
                    </Comment.Metadata>

                    <Comment.Text className="comment-text"> <StarRating className="stars-comments"value={review.rating} noHover /></Comment.Text>
                    <Comment.Text className="review-body">{review.body}</Comment.Text>
                    <p>Username: {review.user_profile.username}</p>
                    <Comment.Actions>
                    <Comment.Action className="review-reply">Reply</Comment.Action>
                    </Comment.Actions>
                    <Comment.Text><div className="comment-comments">COMMENTS:</div></Comment.Text>


                    <div className="review-comments">
                    {
                      review.comments.map(comment => {
                        return(
                        <p>{comment.body}<span>- {comment.user_profile.first_name}</span></p>
                        )
                      })
                    }
                    </div>
         
                    </Comment.Content>

                    </Comment>
                

                    </Comment.Group>


                  </div>
                    )
                  })
                }
                

              
        </div>

        
        </div>






      </>
    )
  }
}
export default Ship

