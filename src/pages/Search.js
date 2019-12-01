import React, { Component } from "react"
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/search.css";

class Search extends Component {
  state = { ships: [] }
  componentDidMount() {
    this.fetchShips()
  }
  fetchShips = async () => {
    const { data } = await axios.get(
      'http://localhost:4000/ships',
      { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('AUTH_TOKEN') }
    )
    this.setState({ ships: this.filterShipsByTerm(data.ships) })
  }
  filterShipsByTerm = ships => {
    const { match } = this.props;
    const searchTerm = match.params.searchTerm || '';
    return ships.filter(ship => ship.reviews.some(({ body = '' }) => body.toLowerCase().includes(searchTerm.toLowerCase())))
  }
  render(){
    const { ships } = this.state
      console.log(this.state)
    return(
      <>
      <div className="search-nav-container"></div>
      <div className="container">
        <div className="search-filters">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <select className="browser-default custom-select">
                  <option selected>Any Price</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className="browser-default custom-select">
                  <option selected>Any Destination</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className="browser-default custom-select">
                  <option selected>Any Departure</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className="browser-default custom-select">
                  <option selected>Any Date</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <select className="browser-default custom-select">
                  <option selected>Any Cruiseline</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="search-sort-container">
          <div className="search-sort">Sort by Recommended</div>
          <div className="search-sort">Showing 1-6 of {ships.length} results</div>
        </div>
      </div>
      <div className="search-results-container"></div>
      <div className="container">
        {ships.map(ship => {
          const firstReview = ship.reviews[0] || {};
          return (
          <>
            <div className="card mb-3">
            <Link to={`/ship/${ship.id}`}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={ship.url} className="card-img search-image" alt="Ship" />
                </div>
              <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title search-title">{ship.cruise_name.name} {ship.name}</h5>
                      <div className="search-ratings-reviews">
                      <div className="search-ratings"> <StarRating value='4' noHover /></div>
                      <div className="search-reviews"><p className="card-text review-text"><small class="text-muted review-text">{ship.reviews.length} Reviews</small></p></div>
                      </div>
                      <p className="card-text ship-preview">{ship.description.substring(0, ship.description.indexOf('.'))}</p>
                      <p className="card-text desc-preview"><small class="text-muted">"{firstReview.body}"</small></p>
              </div>
            </div>
          </div>
          </Link>
        </div>
       
          </>
        )})}
      </div>
      <div className="search-show-container"></div>
      </>
    )
  }
}
export default withRouter(Search)