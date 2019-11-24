
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { setDataFrom, ENDPOINTS } from "./lib/clientUtil.js";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Ship from "./pages/Ship";
import About from "./pages/About";
import Ships from "./Ships";
import Footer from './pages/Footer'

// import components
import {NavigationBar} from './components/NavigationBar'

// import CSS

import "./styles/global.css";
import "./styles/home.css";
import "./styles/search.css";
import "./styles/ship.css";
import "./styles/about.css";

const k_cruise_lines = 'cruise_lines'
const k_ship = "ships"


class App extends Component {
  state = { ship: []}
  render() {
    const { ships } = this.state;
    return (
      <>
        <BrowserRouter>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/search/:searchTerm?" render={() => <Search ships={ships} />} />
            <Route path="/ship/:id" component={Ship} />
            <Route exact path="/about" component={About} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }

  componentDidMount() {
    setDataFrom(k_cruise_lines, ENDPOINTS[k_cruise_lines], this)
    setDataFrom(k_ship, ENDPOINTS[k_ship], this);
  }
}

export default App;