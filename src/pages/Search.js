import React, { Component } from "react"
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StarRating from '../components/StarRating';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/search.css";



class Search extends Component {
  state = { 
         ships: [],
         query: ''

        }
  componentDidMount() {
    this.fetchShips()
  }
  fetchShips = async () => {
    const { data } = await axios.get(
      'http://localhost:4000/ships?_limit=5',
      { 'Content-Type': 'application/json', Authorization: sessionStorage.getItem('AUTH_TOKEN') }
    )
    
    this.setState({ ships: this.filterShipsByTerm(data.ships), pageCount: 5 })
  }
  filterShipsByTerm = ships => {
    const { match } = this.props;
    const searchTerm = match.params.searchTerm || '';
    return ships.filter(ship => ship.reviews.some(({ body = '' }) => body.toLowerCase().includes(searchTerm.toLowerCase())))
  }

  handleQueryChange = e => this.setState({ query: e.target.value })
  handleSubmit = e => {
    e.preventDefault();
    const { query, ...queryParams } = this.state;
    const redirectPath = Object.keys(queryParams).reduce((acc, paramKey) => {
      const paramValue = queryParams[paramKey]
      if (!paramValue) return acc;
      return acc ? acc + `&${paramKey}=${paramValue}` : `?${paramKey}=${paramValue}`
    }, '')
    this.props.history.push(`/search/${query}`)
    window.location.reload(false);
  }
  handleFilterChange = field => e => this.setState({ [field]: e.target.value })

  render(){
    const { ships } = this.state
    const { query } = this.state;
      console.log(this.state)
    return(
      <>
      <div className="container">
      <form className="input-group mb-3 home-input-group" onSubmit={this.handleSubmit}>
        <input type="text" className="form-control"  placeholder="Search for Reviews"  aria-describedby="basic-addon2" value={query} onChange={this.handleQueryChange} />
          <div className="input-group-append">
            <button  className="btn btn-primary" type="button" onClick={this.handleSubmit}>Search</button>
        </div>
      </form>
        <div className="search-filters">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group search-form-group">
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
          <div className="search-sort">Sort by Cruise Line</div>
          <div className="search-sort">Showing {ships.length} results</div>
        </div>
      </div>
      <div className="search-results-container"></div>
      <div className="container">
        {ships.map(ship => {
          const firstReview = ship.reviews[0] || {};
          const ratingAverage = ship.reviews[0].rating || {};
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
                      <div className="search-ratings"> <StarRating value={ratingAverage} noHover /></div>
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