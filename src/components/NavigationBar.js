import React, { useState } from "react";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import { Link} from 'react-router-dom'
import{Button } from 'react-bootstrap'
import '../styles/NavigationBar.css'

 function TestNav() {
  const [change , setChange] = useState(false);
  const changePosition = 200;

  let position = useWindowScrollPosition();
  // position == { x: 0, y: 0 }

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style = {
    display: "flex",
    backgroundColor: change ? "#064164" : "transparent",
    transition: "400ms ease",
    height: "70px",
    position: "fixed",
    right: 0,
    left: 0,
    top: 0
  };
    return (
      <div style={style}>
             <Link  className="nav-link nav-text  py-3" href="#">Cruisebuddy</Link>
        <Link className="nav-link nav-text py-3 " >Find a Cruise</Link>
          <Link className="nav-link nav-text py-3" href="#">Log in/Sign Up</Link>
        <Link><Button variant="outline-light btn-sm ">Write a Review</Button></Link> 
      </div>
  
  
  );
}
function Spacer() {
  let style = {
    height: "10px"
  };

  return <div style={style} />;
}
function NavigationBar() {
  return (
    <div className="">
      <TestNav />
   
      <Spacer />
    </div>
  );
}

 export default NavigationBar
