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
		  if (response.status === 200) {
        let currentUser = this.state.username;
        this.props.passData("loggedIn", true);
        this.setState({currentUser}, () => this.props.passData("currentUser", this.state.currentUser));

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

        this.setState({currentUser}, () => this.props.passData("currentUser", this.state.currentUser));
        alert("Logged In!");
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Not Logged in.");
      }
      this.props.passData("loggedIn", true);
		});
  };


  render() {



    return (
      <div>

        <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>
        
        <div className="row">
        <div className="col-md-7">
        <div className="jumbotron shadow-lg  p-3 mb-5">
            <h5 className = "currentPage">1 <span className="blue">Created</span> <span className="purple">For
            </span> (<span className="developer">Developers</span>) <span className="purple">By</span> [<span className="developer">Developers</span>] <span className="blue">=></span> &#123;</h5>
            {/*first sentence*/}
            <h6 className = "currentPage">2 <br></br>3 &#60;<span className="red">BitHub</span> <span className="yellow">is</span> the latest <span className="blue">tool</span> <span className="purple">for</span> <span className="developer">developers</span> to <span className="blue">spread</span><br></br>4 <span className="lightBlue">knowledge</span> within their <span className="lightBlue">community</span>/&#62;; <br></br>5 <br></br>{/*second sentence*/}
            6 &#60;<span className="blue">Here</span>, you can <span className="yellow">save</span> and <span className="yellow">share</span> your <span className="blue">best</span> <span className="lightBlue">code</span> <span className="purple">for</span> all <span className="purple">aspiring</span> <br></br>7 <span className="developer">developers</span> across the <span className="lightBlue">globe</span>/&#62;;<br></br>8 <br></br>{/*third sentence*/}
            9 &#60;<span className="blue">You</span> will <span className="yellow">become</span> an <span className="purple">integral</span> <span className="lightBlue">part</span> in both the <br></br>10 <span className="lightBlue">enrichment</span> and the <span className="lightBlue">growth</span> of <span className="developer">developers</span> <span className="lightBlue">everywhere</span>/&#62;;<br></br>11 <br></br>12 &#125;;</h6>
        </div>
      </div>
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