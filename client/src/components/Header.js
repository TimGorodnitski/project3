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
  color: "orange",
  fontSize: "27px",
  opacity: "0.7"
}

var LinkStyle = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "lightgreen",
  fontSize: "27px",
  opacity: "0.7"
}

var linkstyles = {
  paddingLeft: "15px",
  paddingRight: "15px",
  color: "cyan",
  fontSize: "27px",
  opacity: "0.7"
}

var h1Style = {
  paddingRight: "15px",
  color: "white",
  marginLeft: "10px",
}


var logo = {
  width: "50px",
  height: "50px",
  opacity: "0.5",
  marginTop: "8px",
  // marginRight: "10px",
  // padding: "5px",
  cursor: "pointer",
  border: "0.5px solid black",
  // backgroundColor: "rgba(25, 25, 25, 0)",
  borderRadius: "20%",
  
}

var loginStyle = {
  height: "30px",
  width: "30px",
  backgroundColor: "grey",
  marginLeft: "20px",
  marginTop: "15px",
  marginBottom: "15px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "1px solid black"

}


class Header extends React.Component {

  state={
  }


  componentDidMount() {
  }
  

  render(){
      return (
        <div>
          <nav className="navbar navbar-dark bg-none">
            <header className="row" style={headerStyle}>
            <div className="fullLogo">
              <img className="logoIMG" style={logo} alt="logo" src="https://yt3.ggpht.com/a-/AN66SAx9PIe3C5skwcMtRSBsLehSxatZ0EJYaszD9w=s900-mo-c-c0xffffffff-rj-k-no"></img>
              <h1 style={h1Style}><Link to="/" id="bitHub" className="nav-link">BitHub</Link></h1>
              </div>
              <div className="navbar-nav" style={navbarStyle}>

                

                <Link to="/resources" id="resourcesLink" className="nav-link navLink" style={linkStyle}>Resources</Link>
                
                <Link to="/search" id="searchLink" className="nav-link navLink" style={linkstyle}>Search</Link>
                
                <Link to="/new" id="newsnippetLink" className="nav-link navLink" style={LinkStyle}>New Snippet</Link>

                <Link to="/profile" id="mysnippetsLink" className="nav-link navLink" style={linkstyles}>My Snippets</Link>
                
                <img className = "loginIMG" style={loginStyle} alt="profile" href="/profile" src="https://static.thenounproject.com/png/23665-200.png"></img>
                <span className="userName">{this.props.currentUser}</span>

              </div>
            </header>
          </nav>
        </div>
      )
  }
}



export default Header;