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
    password: ""
  };
  componentDidMount() {

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
        <div>
            <h1 className = "currentPage"> This is the Home page. </h1>
            <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>
        </div>

        <div id="modal" style={this.state.styles1}>
          <button id="closeModal" onClick={this.closeSignInModal1}>x</button>
          <h1>Sign In</h1>
          <form className="login-signup-form" >
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus />
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
            <button className="success-button" id="submit" type="submit">Login</button>
            <a href="#modalSignUp" id="createLink" onClick={()=>{this.closeSignInModal1();this.toggleSignInModal2()}}>Create an account</a>
          </form>
        </div>

        <div id="modalSignUp" style={this.state.styles2}>
          <button id="closeModalSignUp" onClick={this.closeSignInModal2}>x</button>
          <h1>Sign Up</h1>
          <form className="login-signup-form" onSubmit={()=>{this.handleSignUp()}}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus />
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
            <button className="success-button" type="submit">Sign Up</button>
          </form>

          {/* <input placeholder="First Name"></input>
          <input placeholder="Last Name"></input>
          <input placeholder="Username"></input>
          <input placeholder="Password"></input>
          <button id="submit">Submit</button> */}

          {/* <a href="#modal" id="createLink" onClick={()=>{this.closeSignInModal2(); this.toggleSignInModal1()}}>Sign In</a> */}
        </div>
        
      </div>
    );
  }
}

export default Home;