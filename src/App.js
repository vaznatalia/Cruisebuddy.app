// import libraries

import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// import pages
import Home from './pages/Home'
import Search from './pages/Search'
import Ship from './pages/Ship'
import About from './pages/About'

// import components
import {NavigationBar} from './components/NavigationBar'

// import CSS

import './styles/global.css'
import './styles/home.css'
import './styles/search.css'
import './styles/ship.css'
import './styles/about.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NavigationBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/search" component={Search} />  
        <Route path="/ship/:id" component={Ship} />
        <Route exact path="/about" component={About} />      
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
