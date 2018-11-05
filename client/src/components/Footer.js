import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";


var gitHubStyle = {
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    margin: "2px",
    cursor: "pointer",
    display: "inline-flex"
}

class Footer extends React.Component {
    state={
    }
  
  
    componentDidMount() {
    }
    
  
    render(){
        return (
            <div>
                <footer className = "footer">
                <a href="https://github.com/TimGorodnitski/project3" target="_blank">
               <img className="gitLogo"   style={gitHubStyle} alt="gitHubLogo" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"></img> 
               </a>
               <div className="linkGit">
                <a href="https://github.com/TimGorodnitski/project3" id="gitLink" target="_blank">GitHub</a>
                </div>
                </footer>
            </div>
        )}
}
export default Footer;