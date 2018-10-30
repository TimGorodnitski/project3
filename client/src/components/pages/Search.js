import React from "react";
import CM from "../CM";
// import {Link} from "react-router-dom";
import axios from "axios";

class Search extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get("/snippets").then((response) => {
      console.log(response.data);
      this.setState({
        results: response.data
      });
    });
  }

  render() {     
    var options = {
      lineNumbers: true
    }
    
    return (
        <div>
            <h1> This is the Search page. </h1>
            {
              this.state.results.map((item) => {
                // create a route-able link for each product
                return (
                  <CM key={item._id} body={item.body} title={item.title} options={options}/>
                );
              })
            }
        </div>
    );
  }
}

export default Search;