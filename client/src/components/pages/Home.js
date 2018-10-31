import React from "react";
import "./Home.css";
// import {Link} from "react-router-dom";
// import axios from "axios";

class Home extends React.Component {
  state = {
  };

  componentDidMount() {

  }

  render() {
    return (
      <div>
        
        <div className="jumbotron">
            <h1 className = "currentPage"><span className="blue">Created</span> <span className="purple">For</span> (<span className="developer">Developers</span>) <span className="purple">By</span> [<span className="developer">Developers</span>];</h1>
            <br></br>
            <h3 className = "currentPage">bitHub is the latest tool for developers to share knowledge with their community. 
            Here, you can save your best code for all aspiring developers to use and learn from. 
            You will become an integral part in both the enriching and the growth of developers everywhere.</h3>
        </div>
      </div>
    );
  }
}

export default Home;