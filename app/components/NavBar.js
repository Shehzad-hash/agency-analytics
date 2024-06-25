"use client";
import React, { useEffect } from "react";
import "../style.css";
import Image from "next/image";
import Logo from "../../public/log.svg";
import search from "../../public/search.svg";
import berger from "../../public/burger.svg"; 
import pro from "../../public/pro.svg"; 

const NavBar = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });
  return (
    <nav className="navbar navbar-expand-lg customNav">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image src={Logo} className="navLogo" />   
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Location
              </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Term
              </a>
              <a href="#" className="nav-link childNav">all</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Size
              </a>
              <a href="#" className="nav-link childNav">Any Aircarft</a>
            </li>
            <li className="nav-item searchIcon">
              <a className="nav-link" href="#">
              <Image src={search} className="serchIcon" />   
              </a>
              
            </li>
          </ul>
          <div className="navBtn ms-auto">
            <button className="hangerBtn">
              + Add Hanger
            </button>
            <div className="profile">
            <Image src={berger} className="bergerIcon" />   
            <Image src={pro} className="porfileIcon" />   
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
