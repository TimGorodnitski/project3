import React from "react";
import "./Home.css";
// import {Link} from "react-router-dom";
import axios from "axios";


class Home extends React.Component {
  state = {
    styles1: {
      display: "none"
    },
    styles2: {
      display: "none"
    },
    username: "",
    password: "",
    signInModalOpen: false,
    currentSignInModalStyle: this.closedModalStyle,
    signUpModalOpen: false,
    currentSignUpModalStyle: this.closedModalStyle


  };

  closedModalStyle = {
    display: "none",  /* Hidden by default */
    position: "fixed",  /* Stay in place */
    zIndex: 1,  /* Sit on top */
    top: 0,
    width: "100%", /* Full width */
    height: "100%",  /* Full height */
    overflow: "auto",  /* Enable scroll if needed */
    backgroundColor: "rgb(0,0,0)",  /* Fallback color */
    backgroundColor: "rgba(0,0,0,0.4)",  /* Black w/ opacity */
  }

  openedModalStyle = {
    display: "block",  /* Hidden by default */
    position: "fixed",  /* Stay in place */
    zIndex: 1,  /* Sit on top */
    left: 310,
    top: 109,
    width: "50%", /* Full width */
    height: "70%",  /* Full height */
    overflow: "auto",  /* Enable scroll if needed */
    backgroundColor: "white",
    margin: "0 auto",
    borderRadius: "10px"

  }


  toggleSignInModal = () => {
    this.state.signInModalOpen ? this.setState({
      currentSignInModalStyle: this.closedModalStyle
    }) : this.setState({
      currentSignInModalStyle: this.openedModalStyle,
      currentSignUpModalStyle: this.closedModalStyle
    })
    this.setState({
      signInModalOpen: !this.state.signInModalOpen,
      signUpModalOpen: !this.state.signUpModalOpen
    })
  }

  toggleSignUpModal = () => {
    this.state.signUpModalOpen ? this.setState({
      currentSignUpModalStyle: this.closedModalStyle
    }) : this.setState({
      currentSignUpModalStyle: this.openedModalStyle,
      currentSignInModalStyle: this.closedModalStyle
    })
    this.setState({
      signUpModalOpen: !this.state.signUpModalOpen,
      signInModalOpen: !this.state.signInModalOpen
    })
  }
  componentDidMount() {
    this.setState({
      currentSignInModalStyle: this.closedModalStyle, 
      currentSignUpModalStyle: this.closedModalStyle, 
      signUpModalOpen: false,
      signInModalOpen: false
    })
  }

  handleInputChange = (event) => {
		// update any state property with the input value of the same name
		this.setState({
		  [event.target.name]: event.target.value
		});
	};

  handleSignUp = (event) => {
    // event.preventDefault();
    // send the entire state object to the back-end
    console.log("Attempting signup with state: " + this.state.username + " " + this.state.password)
		axios.post("/signup", this.state).then((response) => {
			console.log(response)
		  if (response.data === true) {
				alert("Signed up!")
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Signed up.");
		  }
		});
  };
  
  handleLogIn = (event) => {
    // event.preventDefault();
    // send the entire state object to the back-end
    console.log("Attempting login with state: " + this.state.username + " " + this.state.password)
		axios.post("/login", this.state).then((response) => {
			console.log(response.data);
		  if (response.data === true) {
				alert("Logged In!")
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Logged in.");
		  }
		});
	};


  render() {

    return (
      <div>

        <button id="openModal" onClick={this.toggleSignInModal}>Sign In</button>

        <div className="jumbotron">
          <h1 className="currentPage"><span className="blue">Created</span> <span className="purple">For</span> (<span className="developer">Developers</span>) <span className="purple">By</span> [<span className="developer">Developers</span>];</h1>
          <br></br>
          <h3 className="currentPage">bitHub is the latest tool for developers to share knowledge with their community.
          Here, you can save your best code for all aspiring developers to use and learn from.
            You will become an integral part in both the enriching and the growth of developers everywhere.</h3>
        </div>
        <div id="modal" style={this.state.currentSignInModalStyle}>
          <button id="closeModal" onClick={this.toggleSignInModal}>x</button>
          <h1>Sign In</h1>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button id="submit">Submit</button>
          <a href="#modalSignUp" id="createLink" onClick={this.toggleSignUpModal}>Create an account</a>
        </div>
        <div id="modalSignUp" style={this.state.currentSignUpModalStyle}>
          <button id="closeModal" onClick={this.toggleSignUpModal}>x</button>
          <h1>Sign Up</h1>
          <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button id="submit">Submit</button>
          <a href="#modal" id="createLink" onClick={this.toggleSignInModal}>Sign In</a>
        </div>

      </div>
    );
  }
}

export default Home;