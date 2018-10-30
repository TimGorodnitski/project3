import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

var navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexFlow: "row wrap",
  float: "right"
}
var headerStyle = {
  width: "100%",
  fontColor: "white"
}
var linkStyle = {
  paddingLeft: "10px",
  paddingRight: "10px"
}

var h1Style = {
  paddingRight: "15px",
  color: "white"
}

var navStyle = {
  width: "100px"
}


const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-none">
    <header className="row" style={headerStyle}>
      <h1 style={h1Style}><Link to="/" className="nav-link" style={linkStyle}>bitHub</Link></h1>
      <div className="navbar-nav" style={navbarStyle}>
      
      <Link to="/resources" className="nav-link" style={linkStyle}>Resources</Link>
      
      <Link to="/search" className="nav-link" style={linkStyle}>Search</Link>
      
      <Link to="/new" className="nav-link" style={linkStyle}>New Snippet</Link>
      </div>
      </header>
      </nav>
  )}





export default Header;