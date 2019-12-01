// import React, { Component } from "react"
// import Header from "../components/Header"
// import Footer from "../components/Footer"
// import '../styles/home.css'


// class Home extends Component {
//   state = { query: '', destination: '', port: '' }
//   handleQueryChange = e => this.setState({ query: e.target.value })
//   handleSubmit = e => {
//     e.preventDefault();
//     const { query, ...queryParams } = this.state;
//     const redirectPath = Object.keys(queryParams).reduce((acc, paramKey) => {
//       const paramValue = queryParams[paramKey]
//       if (!paramValue) return acc;
//       return acc ? acc + `&${paramKey}=${paramValue}` : `?${paramKey}=${paramValue}`
//     }, '')
//     this.props.history.push(`/search/${query}${redirectPath}`)
//   }
//   handleFilterChange = field => e => this.setState({ [field]: e.target.value })
//   render(){
//     const { query, destination, port } = this.state;
    
//     return(
//       <div>
//       <form>
//       <input type="text" placeholder="Search" onChange={this.paramKey}/>
//       </form>
//           <Header />
      
//       </div>
     
//     )
//     }
//   }
//    export default Home; 
