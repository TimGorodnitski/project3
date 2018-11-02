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
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "rgb(223, 88, 223)",
  fontSize: "27px",
  opacity: "0.7"
}

var linkstyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "lightgreen",
  fontSize: "27px",
  opacity: "0.7"
}

var LinkStyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "orange",
  fontSize: "27px",
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
  marginTop: "2px",
  padding: "5px",
  cursor: "pointer",
  backgroundColor: "rgba(25, 25, 25)"
  
}

var loginStyle = {
  height: "50px",
  width: "50px",
  backgroundColor: "gray",
  marginLeft: "25px",
  marginTop: "15px",
  marginBottom: "15px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "1px solid black"

}


const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-dark bg-none">
    <header className="row" style={headerStyle}>

    <img className="logoIMG" style={logo} src = "https://png.pngtree.com/png_detail/18/09/10/pngtree-Initial-Letter-BH-Logo-Design-png-clipart_3579590.jpg"></img>

      <h1 style={h1Style}><Link to="/" className="nav-link">BitHub</Link></h1>
      <div className="navbar-nav" style={navbarStyle}>
      
      <Link to="/resources" className="nav-link navLink" style={linkStyle}>Resources</Link>
      
      <Link to="/search" className="nav-link navLink" style={linkstyle}>Search</Link>
      
      <Link to="/new" className="nav-link navLink" style={LinkStyle}>New Snippet</Link>
      <img className = "loginIMG" style={loginStyle} src="https://static.thenounproject.com/png/23665-200.png"></img>

      </div>
      </header>
      </nav>
      </div>
  )}





export default Header;