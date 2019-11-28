import React, { Component } from "react"
import NavigationBar from "../components/NavigationBar"
import Footer from "../components/Footer"
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
          <div className="container">
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
            <input type="text" className="form-control home-search-box" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search for Reviews" value={query} onChange={this.handleQueryChange} />
            </div>
            </form>
          </div>

          <div className="outermost">
<div className="container">
  <nav className="homebar">
    <ul>
      <li>Port
        <div className="mega-menu">
          <div className="inner-mega-menu">
            <p>Port 1</p>
            <p>Port 2</p>
            <p>Port 3</p>
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
            <p>Cruiseline 1</p>
            <p>Cruiseline 2</p>
            <p>Cruiseline 3</p>
          </div>
          <div className="inner-mega-menu">
            <p>Cruiseline 4</p>
            <p>Cruiseline 5</p>
            <p>Cruiseline 6</p>
          </div>
          <div className="inner-mega-menu">
            <p>Cruiseline 7</p>
            <p>Cruiseline 8</p>
            <p>Cruiseline 9</p>
          </div>
          <div className="inner-mega-menu">
            <p>Cruiseline 10</p>
            <p>Cruiseline 11</p>
            <p>Cruiseline 12</p>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</div>
</div>



  
          </div>
          <h1>HOT CRUISE DEALS</h1>
          <div class="deck-card">
          <div class="div1"></div>
          <div class="div2"> </div>
          <div class="div3"> </div>
          <div class="div4"> </div>
          <div class="div5"> </div>
          <div class="div6"> </div>
          </div>
          </>

          
          )
          }
          }
          export default Home;