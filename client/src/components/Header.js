import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import axios from "axios";

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
    styles1: {
      display: "none",
    },
    styles2: {
      display: "none"
    },
    username: "",
    password: "",
    currentUser: ""
  }

  toggleSignInModal1 = () => {
    let styles1 = {
      display: "block"
    }
    
    if(this.state.styles1.display === "none"){
      this.setState({styles1})
    }
  }

  closeSignInModal1 = () => {
    let styles1= {
      display: "none"
    }
    if(this.state.styles1.display === "block"){
      this.setState({styles1})
    }
  }

  toggleSignInModal2 = () => {
    let styles2 = {
      display: "block"
    }
    
    if(this.state.styles2.display === "none"){
      this.setState({styles2})
    }
  }

  closeSignInModal2 = () => {
    let styles2= {
      display: "none"
    }
    if(this.state.styles2.display === "block"){
      this.setState({styles2})
    }
  }

  handleInputChange = (event) => {
		// update any state property with the input value of the same name
		this.setState({
		  [event.target.name]: event.target.value
		});
	};

  handleSignUp = (event) => {
    event.preventDefault();
    // send the entire state object to the back-end
    console.log("Attempting signup with state: " + this.state.username + " " + this.state.password)
		axios.post("/signup", this.state).then((response) => {
			console.log(response.data)
		  if (response.status === 200) {
        let currentUser = this.state.username;

        this.setState({currentUser}, () => this.props.passData("currentUser", this.state.currentUser));
				// alert("Signed up!")
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Signed up.");
      }
      this.props.passData("loggedIn", true);
		});
  };
  
  handleLogIn = (event) => {
    event.preventDefault();
    // send the entire state object to the back-end
    console.log("Attempting login with state: " + this.state.username + " " + this.state.password)
		axios.post("/login", this.state).then((response) => {
			console.log(response.data);
		  if (response.data.username) {
        var currentUser = response.data.username;

        this.setState({currentUser}, () => this.props.passData("currentUser", this.state.currentUser));
        // alert("Logged In!");
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Logged in.");
      }
      this.props.passData("loggedIn", true);
		});
  };


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

            <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>


                        <div id="modal" style={this.state.styles1}>
          <button id="closeModal" onClick={this.closeSignInModal1} type="button" className="close" aria-label="Close">
           <span aria-hidden="true">&times;</span>
          </button>
          <h1>Sign In</h1>
          <form className="login-signup-form" onSubmit={(event)=>{this.handleLogIn(event)}}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus /><br></br>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} /><br></br>
            <button className="success-button" id="submit" type="submit" onClick={this.closeSignInModal1}>Login</button> <br></br>
            <a href="#modalSignUp" id="createLink" onClick={()=>{this.closeSignInModal1();this.toggleSignInModal2()}}>Create an account</a>
          </form>
        </div>

        <div id="modalSignUp" style={this.state.styles2}>
          <button id="closeModalSignUp" onClick={this.closeSignInModal2} type="button" className="close" aria-label="Close">
           <span aria-hidden="true">&times;</span>
          </button>
          <h1>Sign Up</h1>
          <form className="login-signup-form" onSubmit={(event)=>{this.handleSignUp(event)}}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus /><br></br>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} /><br></br>
            <button className="success-button" type="submit" onClick={this.closeSignInModal2}>Sign Up</button>
          </form>
        </div>

              </div>
            </header>
          </nav>
        </div>
      )
  }
}

export default Header;