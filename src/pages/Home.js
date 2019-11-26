import React, { Component } from "react"
import { NavigationBar } from "../components/NavigationBar"
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
 
      <label for="home-input">Find</label>
      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={query} onChange={this.handleQueryChange} />
      </div>
      </form>
    </div>

    <select className="browser-default custom-select" value={destination} onChange={this.handleFilterChange('destination')}>
      <option selected>Destination</option>
      <option value="d-1">D-One</option>
      <option value="d-2">D-Two</option>
      <option value="d-3">D-Three</option>
    </select>
    <select className="browser-default custom-select" value={port} onChange={this.handleFilterChange('port')}>
      <option selected>Port</option>
      <option value="p-1">P-One</option>
      <option value="p-2">P-Two</option>
      <option value="p-3">P-Three</option>
    </select>
    <select className="browser-default custom-select">
      <option selected>Any Departure</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

  </div>
  </>
)
}
}
export default Home