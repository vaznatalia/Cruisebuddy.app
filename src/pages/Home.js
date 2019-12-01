import React, { Component } from "react"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
import Cards from '../components/Cards'

import '../styles/home.css'

class Home extends Component {
  state = { query: '', destination: '', port: '' }
  handleQueryChange = e => this.setState({ query: e.target.value })
  handleSubmit = e => {
    e.preventDefault();
    const { query, ...queryParams } = this.state;
    const redirectPath = Object.keys(queryParams).reduce((acc, paramKey) => {
      const paramValue = queryParams[paramKey]
      if (!paramValue) return acc;
      return acc ? acc + `&${paramKey}=${paramValue}` : `?${paramKey}=${paramValue}`
    }, '')
    this.props.history.push(`/search/${query}${redirectPath}`)
  }
  handleFilterChange = field => e => this.setState({ [field]: e.target.value })
  render(){
    const { query, destination, port } = this.state;
    return(
            <>
          <div  className="hero-div">
          <div className="input-group mb-3">
            <input type="text" className="form-control"  placeholder="Search for Reviews"  aria-describedby="basic-addon2" value={query} onChange={this.handleQueryChange} />
            <div className="input-group-append">
              <button  onSubmit={this.handleSubmit} className="btn btn-primary" type="button">Search</button>
              </div>
            </div>
          </div>
          
        

      
          <div className="outermost">
          <div className="container">
          <nav className="homebar">
          <ul>
          <li>Port
          <div className="mega-menu">
            <div className="inner-mega-menu">
              <p>Miami</p>
              <p>Nassau</p>
              <p></p>
            </div>
            <div className="inner-mega-menu">
              <p>Port 4</p>
              <p>Port 5</p>
              <p>Port 6</p>
            </div>
            <div className="inner-mega-menu">
              <p>Port 7</p>
              <p>Port 8</p>
              <p>Port 9</p>
            </div>
            <div className="inner-mega-menu">
              <p>Port 10</p>
              <p>Port 11</p>
              <p>Port 12</p>
            </div>
          </div>
          </li>
          <li>Destination
          <div className="mega-menu">
          <div className="inner-mega-menu">
              <p>Destination 1</p>
              <p>Destination 2</p>
              <p>Destination 3</p>
            </div>
            <div className="inner-mega-menu">
              <p>Destination 4</p>
              <p>Destination 5</p>
              <p>Destination 6</p>
            </div>
            <div className="inner-mega-menu">
              <p>Destination 7</p>
              <p>Destination 8</p>
              <p>Destination 9</p>
            </div>
            <div className="inner-mega-menu">
              <p>Destination 10</p>
              <p>Destination 11</p>
              <p>Destination 12</p>
            </div>
          </div>
          </li>
          <li>Cruiseline
          <div className="mega-menu">
          <div className="inner-mega-menu">
              <p>Carnival</p>
              <p>Royal Caribbean</p>
              <p>Princess Cruises</p>
            </div>
            <div className="inner-mega-menu">
              <p>Norwegian</p>
              <p>Celebrity</p>
              <p>MSC</p>
            </div>
            <div className="inner-mega-menu">
              <p>Crystal</p>
              <p>Holland</p>
              <p>Disney</p>
            </div>
            <div className="inner-mega-menu">
              <p>Oceania Cruises</p>
              <p>Polar Cruises</p>
              <p>Viking Ocean Cruises</p>
            </div>
          </div>
          </li>
          </ul>
          </nav>
          </div>
          </div>



  
          

          <Cards/>
          </>

          
          )
          }
          }
          export default Home;