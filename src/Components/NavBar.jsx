import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styling/NavBar.css";
import logo1 from "../Assets/nav_logo.png";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo1} alt="" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/guidelines"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Guidelines
              </NavLink>
              
            </li>
            <li className="nav-item">
              
            <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
           
            <li className="nav-item">
              <NavLink
                exact
                to="/timeline"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Timeline
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ps"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 Problem Statements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/archive"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 Archive
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Register
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
