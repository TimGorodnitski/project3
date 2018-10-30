import React from "react";
import {Link} from "react-router-dom";
var navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexFlow: "row wrap"
}
var headerStyle = {
  width: "100%"
}
var linkStyle = {
  paddingLeft: "10px",
  paddingRight: "10px"
}

var h1Style = {
  paddingRight: "15px"
}

var navStyle = {
  width: "100px"
}


const Header = () => {
  return (
    <nav className="navbar navbar-light bg-light">
    <header className="row" style={headerStyle}>
      <h1 style={h1Style}>bitHub</h1>
      <div class="navbar-nav" style={navbarStyle}>
      <Link to="/" className="nav-link" style={linkStyle}>Home</Link>
      <br></br>
      <Link to="/resources" className="nav-link" style={linkStyle}>Resources</Link>
      
      <Link to="/search" className="nav-link" style={linkStyle}>Search</Link>
      
      <Link to="/new" className="nav-link" style={linkStyle}>New Snippet</Link>
      </div>
    </header>
    </nav>
  );
};


export default Header;