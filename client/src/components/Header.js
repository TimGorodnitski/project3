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
  color: "white"
}


var logo = {
  width: "75px",
  height: "75px",
  opacity: "0.9",
  marginTop: "2px",
  padding: "5px",
  cursor: "pointer",
  backgroundColor: "rgba(25, 25, 25, 0)",
  borderRadius: "50%",
  
}

var loginStyle = {
  height: "50px",
  width: "50px",
  backgroundColor: "grey",
  marginLeft: "20px",
  marginTop: "15px",
  marginBottom: "15px",
  borderRadius: "50%",
  cursor: "pointer",
  border: "2px solid black"

}


class Header extends React.Component {
  constructor(props){
    super(props)
  }

  state={
  }


  componentDidMount() {
  }
  

  render(){
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

                <Link to="/profile" className="nav-link navLink" style={linkstyles}>My Snippets</Link>
                
                <img className = "loginIMG" style={loginStyle} href="/profile" src="https://static.thenounproject.com/png/23665-200.png"></img>
                {this.props.currentUser}

              </div>
            </header>
          </nav>
        </div>
      )
  }
}



export default Header;