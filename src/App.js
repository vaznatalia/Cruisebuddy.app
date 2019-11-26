import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import Ship from "./pages/Ship";
import About from "./pages/About";
import Footer from './components/Footer'
import Review from './pages/Review'

// import components

import {NavigationBar} from './components/NavigationBar'
//import {StarRating} from './components/StarRatingComponent'

// import CSS

import './NavigationBar.css'
import "./styles/global.css";
import "./styles/home.css";
import "./styles/search.css";
import "./styles/ship.css";
import "./styles/about.css";
import "./styles/Review.css";
import "./styles/MainPage.css";

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
            <Route exact path="/review" component={Review} />
            </Switch>
          <Footer/>
        </BrowserRouter>
      </>
    );
  }

}

export default App;