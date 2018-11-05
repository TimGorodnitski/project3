import React from "react";
import "./Home.css";
import CodeMirror from "react-codemirror";

// import {Link} from "react-router-dom";


class Home extends React.Component {
 

  state = {

  };

  componentDidMount() {
  }
  

  render() {

var options = {
lineNumbers: true,
readOnly: true,
theme: "dracula",
mode: "htmlmixed"
}

var message = `<for: Developers> <by: Developers>
 
Welcome
Here is the `;

    return (
      <div>        
        
        <div className="jumbotron">
            <CodeMirror value={message} options={options}/>
        </div>
  
        
      </div>
    );
  }
}

export default Home;