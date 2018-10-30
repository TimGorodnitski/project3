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
  paddingRight: "10px",
  color: "lightblue",
  fontSize: "25px",
  opacity: "0.7"
}

var linkstyle = {
  paddingLeft: "10px",
  paddingRight: "10px",
  color: "lightgreen",
  fontSize: "25px",
  opacity: "0.7"
}

var LinkStyle = {
  paddingLeft: "10px",
  paddingRight: "10px",
  color: "orange",
  fontSize: "25px",
  opacity: "0.7"
}

var h1Style = {
  paddingRight: "15px",
  color: "white"
}

var navStyle = {
  width: "100px"
}

var logo = {
  width: "75px",
  height: "75px",
  opacity: "0.5",
  

}


const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-dark bg-none">
    <header className="row" style={headerStyle}>
    <img className="logoIMG" style={logo} src = "https://t4.ftcdn.net/jpg/01/83/14/31/240_F_183143127_vT6GQhv9GxxIfk4ZE6QennKjGssUlK1X.jpg"></img>
      <h1 style={h1Style}><Link to="/" className="nav-link">BitHub</Link></h1>
      <div className="navbar-nav" style={navbarStyle}>
      
      <Link to="/resources" className="nav-link navLink" style={linkStyle}>Resources</Link>
      
      <Link to="/search" className="nav-link navLink" style={linkstyle}>Search</Link>
      
      <Link to="/new" className="nav-link navLink" style={LinkStyle}>New Snippet</Link>
      </div>
      </header>
      </nav>
      </div>
  )}





export default Header;