import React, { useState, useEffect } from 'react';
import UserContext from './UserContext';

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function Navbar({currentUser}){
  const AuthUL = () =>{
    return (
        <ul className="navbar-nav mr-auto">
            <Link className="nav-link" style={{"border-radius" : "180px"}}  to = "/profile">
                {currentUser.fullName}
            </Link>                            
            <Link className="nav-link" style={{"border-radius" : "180px"}}  to = "/logout">
                Logout
            </Link>
        </ul>
    );
}

const OfflineUL = () =>{
    return (
        <ul className="navbar-nav mr-auto">
            <Link className="nav-link" style={{"border-radius" : "180px"}}  to = "/">
                Home
            </Link>                            
            <Link className="nav-link" style={{"border-radius" : "180px"}}  to = "/login">
                Login
            </Link>
        </ul>
    );
}
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{"height": "80px"}}>
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#"><h3 class="display-4">RBC</h3></a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/allannouncements">Announcements</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">All Companies</a>
            </li>
          </ul>
          <div class="col-3 me-5">
            <input class="form-control" type="search" placeholder="Search" style={{"border-radius": "100px"}} aria-label="Search"></input>
          </div>
          <form class="d-flex">
            <Link class="btn btn-outline-secondary me-2" style={{"border-radius" : "180px"}} to="/signin">SIGN IN</Link>
            <Link class="btn btn-outline-secondary" style={{"border-radius" : "100px"}} to="/signup" type="submit">SIGN UP</Link>
          </form>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;