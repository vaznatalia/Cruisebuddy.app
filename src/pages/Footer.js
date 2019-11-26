import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

class Footer extends Component {

   render() {
     return (
        <div className="footer">
           <div className="footer-content">
              <div className="footer-section footer-about"></div>
              <div className="footer-section footer-links"></div>
              <div className="footer-section contact-form"></div>
           </div>


           <div className="footer-bottom">
            &copy; cruisebuddy.herokuapp.com 
           </div>
        </div>
 
     )
   }
 }
 
 export default Footer;
