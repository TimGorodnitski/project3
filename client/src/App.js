import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Resources from "./components/pages/Resources";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import New from "./components/pages/New";
import "./components/pages/Home.css"

class App extends React.Component {
  state={};
  

  passData = (key, value) => {
    console.log(value);
    this.setState({
      [key]: value
    }, () => console.log(this.state))
  };

  render(){
    return (
      <Router>
        <div className="Navcontainer">
          <Header currentUser={this.state.currentUser}  />
          <Route exact path="/" component={()=> <Home passData={this.passData} />}  />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/search" component={Search} />
          <Route  exact path="/new" component={()=> <New currentUser={this.state.currentUser} />} />
        </div>
      </Router>

    )
  }
};

export default App;