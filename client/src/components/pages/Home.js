import React from "react";
import "./Home.css";
// import {Link} from "react-router-dom";
// import axios from "axios";

class Home extends React.Component {
  state = {
    styles: {
      display: "none"
    }
  };
  componentDidMount() {

  }

  toggleSignInModal = () => {
    let styles = {
      display: "block"
    }
    
    if(this.state.styles.display === "none"){
      this.setState({styles})
    }
  }

  closeSignInModal = () => {
    let styles= {
      display: "none"
    }
    if(this.state.styles.display === "block"){
      this.setState({styles})
    }
  }

  render() {


    return (
      <div>
        <div>
            <h1 className = "currentPage"> This is the Home page. </h1>
            <button id="openModal" onClick={this.toggleSignInModal}>Sign In</button>
        </div>
        <div id="modal" style={this.state.styles}>
        <button id="closeModal" onClick={this.closeSignInModal}>x</button>
        <h1>Sign In</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button id="submit">Submit</button>
            <a href="#signup" id="createLink" onClick={this.closeSignInModal}>Create an account</a>
        </div>
        
      </div>
    );
  }
}

export default Home;