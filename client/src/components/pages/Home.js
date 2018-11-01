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
    currentUser: ""
  };

  componentDidMount() {
    this.checkUser();
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
    event.preventDefault();
    // send the entire state object to the back-end
    console.log("Attempting login with state: " + this.state.username + " " + this.state.password)
		axios.post("/login", this.state).then((response) => {
			console.log(response.data);
		  if (response.data.username) {
        var currentUser = response.data.username;
        this.setState({currentUser});
        this.checkUser();
				alert("Logged In!");
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Logged in.");
		  }
		});
	};

  welcomeMessage;

  checkUser = () => {
    if(this.state.currentUser){
      this.welcomeMessage = 
      <div>
        <h1>Welcome, {this.state.currentUser}</h1>
      </div>
    } else{
      this.welcomeMessage = <div><p>Please log in</p></div>
    }
    this.forceUpdate();
  };


  render() {



    return (
      <div>
        {this.welcomeMessage}
        <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>
        
        <div className="jumbotron">
            <h1 className = "currentPage"><span className="blue">Created</span> <span className="purple">For</span> (<span className="developer">Developers</span>) <span className="purple">By</span> [<span className="developer">Developers</span>];</h1>
            <br></br>
            <h3 className = "currentPage">bitHub is the latest tool for developers to share knowledge with their community. 
            Here, you can save your best code for all aspiring developers to use and learn from. 
            You will become an integral part in both the enriching and the growth of developers everywhere.</h3>
        </div>

        <div id="modal" style={this.state.styles1}>
          <button id="closeModal" onClick={this.closeSignInModal1}>x</button>
          <h1>Sign In</h1>
          <form className="login-signup-form" onSubmit={(event)=>{this.handleLogIn(event)}}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus />
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
            <button className="success-button" id="submit" type="submit">Login</button>
            <a href="#modalSignUp" id="createLink" onClick={()=>{this.closeSignInModal1();this.toggleSignInModal2()}}>Create an account</a>
          </form>
        </div>

        <div id="modalSignUp" style={this.state.styles2}>
          <button id="closeModalSignUp" onClick={this.closeSignInModal2}>x</button>
          <h1>Sign Up</h1>
          <form className="login-signup-form" onSubmit={(event)=>{this.handleSignUp(event)}}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus />
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} />
            <button className="success-button" type="submit">Sign Up</button>
          </form>
        </div>
        
      </div>
    );
  }
}

export default Home;