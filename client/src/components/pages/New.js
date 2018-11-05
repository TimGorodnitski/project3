import React from "react";
import "./New.css";
import CM from "../CM";

// import {Link} from "react-router-dom";
// import axios from "axios";

class New extends React.Component {

  
  state = {
  };

  componentDidMount() {

  }

  renderWelcome = (status) => {
    if(status){
      return <h1>This is the New Snippet page. Welcome, {this.props.currentUser}. </h1>
    }else{
      return <h1>Please Log In To Save a Snippet</h1>
    }

  }

  render() {
    return (
        <div>
          {this.renderWelcome(this.props.loggedIn)}
        </div>
    );
  }
}

export default New;