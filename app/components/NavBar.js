"use client"
import React, { useEffect }  from "react";
import "../style.css";   

const NavBar = () => { 
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js')
  })  
  return ( 
      <nav className="navbar navbar-expand-lg customNav">
        <div className="container">  
          <a className="navbar-brand" href="#">
            <img
              src="https://agencyanalytics.com/img/logo/logo.svg"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Integrations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <div className="navBtn ms-auto">
              <button className="mainBtn">Login</button>
              <button className="mainBtn active">Start Trial</button>
            </div>
          </div>
        </div> 
      </nav> 
  );
};

export default NavBar;