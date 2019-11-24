import React, { Component } from "react"
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    return(
      <>
      {/* nav */}
      {ships.map(ship => (
        <div>
          <h1>{ship.name}</h1>
          <p>Reviews</p>
          <ul>
            {ship.reviews.map(({ body }) => (
              <li>{body}</li>
            ))}
          </ul>
        </div>
      ))}
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
          <div className="search-sort">Showing 1-6 of 32 results</div>
        </div>
      </div>
      <div className="search-results-container"></div>\
      <div className="container">
        <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="https://picsum.photos/id/159/383/255" className="card-img" alt="Ship Image" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Carnival Horizon</h5>
                  <p className="card-text">The Horizon is Carnival’s newest entry into the premium cruise line.</p>
                  <p className="card-text"><small class="text-muted">408 Reviews</small></p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="search-show-container"></div>
      </>
    )
  }

}

export default withRouter(Search)