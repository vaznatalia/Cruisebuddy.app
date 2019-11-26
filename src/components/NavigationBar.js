import React from "react";
import { NavLink } from 'react-router-dom'


export const  NavigationBar = () =>( 
      <nav className="navbar">
        <div className="navbar-l">
          <NavLink exact to="/" className="logo">Cruisebuddy</NavLink>
        </div>
        <div className="navbar-r">
            <NavLink exact to="/SubmitReview" className="logo">
              Write a Review
             </NavLink>
        </div>
      </nav>
    )
  