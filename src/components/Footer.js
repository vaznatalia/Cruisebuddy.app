import React, { Component } from "react";
import { NavLink } from 'react-router-dom'


class Footer extends Component {

   render() {
     return (
        
      <footer className="rectangle">
      <div>
       <span className="cruisebuddy" href="#">Cruisebuddy</span>

        <div className="main-footer"> 
          <span>Terms of Use</span>
         <span>Privacy Policy</span>
         <span>FAQ</span>
         <span>Help</span>
         </div>

      <span  className="copyright">  Copyright© Cruisebuddy,Inc.</span>
     </div>
     </footer>
     )
   }
 }
export default Footer
 