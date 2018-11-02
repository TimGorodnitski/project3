import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Resources from "./components/pages/Resources";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import New from "./components/pages/New";
import "./components/pages/Home.css";


class App extends Component{

render(){
  return(
  <Router>
    <div className="Navcontainer">
      <Header/>
      <Route exact path="/" component={Home} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/new" component={New} />
    </div>
  </Router>
  )
};
};


export default App;