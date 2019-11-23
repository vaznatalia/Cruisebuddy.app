import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { setDataFrom, ENDPOINTS } from "./lib/clientUtil.js";
import Footer from './pages/Footer'
// import libraries

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Ship from "./pages/Ship";
import About from "./pages/About";

import Ships from "./Ships";


// import components
import {NavigationBar} from './components/NavigationBar'

// import CSS

import "./styles/global.css";
import "./styles/home.css";
import "./styles/search.css";
import "./styles/ship.css";
import "./styles/about.css";
class App extends Component {
  k_cruise_lines = 'cruise_lines'
  k_ship = "ships"
  state = {[this.k_ship] : []}
  render() {
    return (
      <>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route path="/ship/:id" component={Ship} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }
  componentDidMount() {
    setDataFrom(this.k_cruise_lines, ENDPOINTS[this.k_cruise_lines], this)
    setDataFrom(this.k_ship, ENDPOINTS[this.k_ship], this);
  }
}
export default App;