import React from "react";
import "./Home.css";
// import {Link} from "react-router-dom";
// import axios from "axios";

class Home extends React.Component {
  state = {
    styles1: {
      display: "none"
    },
    styles2: {
      display: "none"
    }
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

  render() {


    return (
        <div className="container">
            
            <button id="openModal" onClick={this.toggleSignInModal1}>Sign In</button>
      
        <div className="jumbotron">
            <h2 className = "currentPage">1 <span className="blue">Created</span> <span className="purple">For
            </span> (<span className="developer">Developers</span>) <span className="purple">By</span> [<span className="developer">Developers</span>] <span className="blue">=></span> &#123;</h2>
            {/*first sentence*/}
            <h3 className = "currentPage">2 <br></br>3 &#60;<span className="red">BitHub</span> <span className="yellow">is</span> the latest <span className="blue">tool</span> <span className="purple">for</span> <span className="developer">developers</span> to <span className="blue">spread</span><br></br>4 <span className="lightBlue">knowledge</span> within their <span className="lightBlue">community</span>/&#62;; <br></br>5 <br></br>{/*second sentence*/}
            6 &#60;<span className="blue">Here</span>, you can <span className="yellow">save</span> and <span className="yellow">share</span> your <span className="blue">best</span> <span className="lightBlue">code</span> <span className="purple">for</span> all <span className="purple">aspiring</span> <br></br>7 <span className="developer">developers</span> across the <span className="lightBlue">globe</span>/&#62;;<br></br>8 <br></br>{/*third sentence*/}
            9 &#60;You will <span className="yellow">become</span> an <span className="lightBlue">integral</span> part in both the <br></br>10 <span className="purple">enrichment</span> and the <span className="purple">growth</span> of <span className="developer">developers</span> everywhere/&#62;;<br></br>11 <br></br>12 &#125;;</h3>
        </div>
        <div id="modal" style={this.state.styles1}>
        <button id="closeModal" onClick={this.closeSignInModal1}>x</button>
        <h1>Sign In</h1>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button id="submit">Submit</button>
            <a href="#modalSignUp" id="createLink" onClick={()=>{this.closeSignInModal1();this.toggleSignInModal2()}}>Create an account</a>
        </div>
        <div id="modalSignUp" style={this.state.styles2}>
        <button id="closeModalSignUp" onClick={this.closeSignInModal2}>x</button>
        <h1>Sign Up</h1>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button id="submit">Submit</button>
            <a href="#modal" id="createLink" onClick={()=>{this.closeSignInModal2(); this.toggleSignInModal1()}}>Sign In</a>
        </div>
        
      </div>
    );
  }
}

export default Home;