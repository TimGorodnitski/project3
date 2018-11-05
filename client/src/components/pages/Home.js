import React from "react";
import "./Home.css";
// import {Link} from "react-router-dom";
import axios from "axios";
import CodeMirror from "react-codemirror";

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

    if (this.state.styles1.display === "none") {
      this.setState({ styles1 })
    }
  }

  closeSignInModal1 = () => {
    let styles1 = {
      display: "none"
    }
    if (this.state.styles1.display === "block") {
      this.setState({ styles1 })
    }
  }

  toggleSignInModal2 = () => {
    let styles2 = {
      display: "block"
    }

    if (this.state.styles2.display === "none") {
      this.setState({ styles2 })
    }
  }

  closeSignInModal2 = () => {
    let styles2 = {
      display: "none"
    }
    if (this.state.styles2.display === "block") {
      this.setState({ styles2 })
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

        this.setState({ currentUser }, () => this.props.passData("currentUser", this.state.currentUser));
        alert("Signed up!")
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

        this.setState({ currentUser }, () => this.props.passData("currentUser", this.state.currentUser));
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

    var options = {
      lineNumbers: true,
      readOnly: true,
      theme: "dracula",
      mode: "javascript"
    }

    var message = `for (Developers) (by Developers) 
class BitHub extends React.Component {
 
Welcome: to the latest tool in the sharing of coding [information] and [knowledge];

const BitHub = is dedicated to growing and enriching the developer community;
 
this.state.mission = render() {
  all the best code && resources we can find, then return (
  <div>
  all this.collectedKnowledge for all the world to use and learn from;
  </div>
  )}
}`;

    return (
      <div>

        <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>
        {/*mission statement*/}
        <div className="row">
          
            <div className="jumbotron">
              <CodeMirror value={message} options={options} />
            </div>
          
        </div>

        {/*cards*/}
        <div className="container">
        <div className="row" id="cardsRow">
        <div className="col-md-4">
        <div className="card" style={{ width: 18 + 'em' }}>
          <img className="card-img-top" src="https://alltechasia.com/wp-content/uploads/2017/11/Code-480x300.jpg" alt="Coding"></img>
          <div className="card-body">
            <h5 className="card-title">Save Snippets</h5>
            <p className="card-text">Take your best code, and save it online in snippets that can be shared with the community as a whole!</p>
          </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card" style={{ width: 18 + 'em' }}>
          <img className="card-img-top" src="http://sites.utexas.edu/ecoadvising/files/2017/07/sis-quantitative-market-research.jpg" alt="Coding"></img>
          <div className="card-body">
            <h5 className="card-title">Find Solutions</h5>
            <p className="card-text">As the community grows, new ways to code will flourish for the benefit of developers everywhere!</p>
          </div>
        </div>
        </div>
        <div className="col-md-4">
        <div className="card" style={{ width: 18 + 'em' }}>
          <img className="card-img-top" src="http://www.uxbeginner.com/wp-content/uploads/2016/01/ultimate-list-ux-topics-banner-user-research-480x300.png" alt="Coding"></img>
          <div className="card-body">
            <h5 className="card-title">Explore Resources</h5>
            <p className="card-text">Check out and keep up with all the new resources that pop up onto the scene in real-time!</p>
          </div>
        </div>
        </div>
        </div>
        </div>

        {/*modals*/}
        <div id="modal" style={this.state.styles1}>
          <button id="closeModal" onClick={this.closeSignInModal1} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h1>Sign In</h1>
          <form className="login-signup-form" onSubmit={(event) => { this.handleLogIn(event) }}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus /><br></br>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} /><br></br>
            <button className="success-button" id="submit" type="submit">Login</button> <br></br>
            <a href="#modalSignUp" id="createLink" onClick={() => { this.closeSignInModal1(); this.toggleSignInModal2() }}>Create an account</a>
          </form>
        </div>

        <div id="modalSignUp" style={this.state.styles2}>
          <button id="closeModalSignUp" onClick={this.closeSignInModal2} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h1>Sign Up</h1>
          <form className="login-signup-form" onSubmit={(event) => { this.handleSignUp(event) }}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleInputChange} autoFocus /><br></br>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange} /><br></br>
            <button className="success-button" type="submit">Sign Up</button>
          </form>
        </div>

      </div>
    );
  }
}

export default Home;