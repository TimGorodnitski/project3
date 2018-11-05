import React from "react";
import "./Home.css";
import CodeMirror from "react-codemirror";

// import {Link} from "react-router-dom";


class Home extends React.Component {


  state = {

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

      <div>        
        
        <div className="jumbotron">
            <CodeMirror value={message} options={options}/>
        </div>
  
        

      </div>
    );
  }
}

export default Home;