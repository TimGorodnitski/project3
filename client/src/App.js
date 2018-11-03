import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Resources from "./components/pages/Resources";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import New from "./components/pages/New";
import "./components/pages/Home.css";


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
        <div className="container">
          <Header loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} />
          <Route exact path="/" component={()=> <Home currentUser={this.state.currentUser} passData={this.passData} loggedIn={this.state.loggedIn}/>} />
          <Route exact path="/resources" component={()=> <Resources currentUser={this.state.currentUser} loggedIn={this.state.loggedIn}/>} />
          <Route exact path="/search" component={()=> <Search currentUser={this.state.currentUser} loggedIn={this.state.loggedIn} />} />
          <Route exact path="/profile" component={()=> <Profile currentUser={this.state.currentUser} loggedIn={this.state.loggedIn}/>} />
          <Route exact path="/new" component={()=> <New currentUser={this.state.currentUser} loggedIn={this.state.loggedIn}/>} />
        </div>
      </Router>

    )
  }
};


export default App;