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

  render() {
    return (
        <div>
            <h1> This is the New Snippet page. Welcome, {this.props.currentUser}. </h1>
            <CM currentUser={this.props.currentUser}/>
        </div>
    );
  }
}

export default New;