
import React from 'react';
import "./Navbar.scss";
import TourList from "../TourList"
import Home from "../Home/home"
import NotFound from "../404Page/notfound"
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route
    // Link
  } from "react-router-dom";

export default function Navbar() {

    return(
        <Router>
     <nav className="navbar">
     <ul className="nav-links">
         <li> <NavLink to="/home"  activeClassName="navbar-link active" className="nav-link">Home</NavLink></li>
         <li> <NavLink to="/about" activeClassName="navbar-link active" className="nav-link">About</NavLink></li>
         <li> <NavLink to="/" exact activeClassName="navbar-link active"     className="nav-link">Tours</NavLink></li>
     </ul>

     </nav>
     <Switch>
         <Route path="/home">
         <Home/>
         </Route>
         <Route  path="/about">
         </Route>
         <Route path="/">
            <TourList/>
         </Route>
         {/* <Route component={NotFound}/> */}
     </Switch>
     </Router>
    )
    
}