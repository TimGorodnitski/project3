import React from "react";
import "./Search.css";
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

  deleteSnippet = (id) => {
		console.log("delete _id: " + id)
		// send the entire state object to the back-end
		axios.delete("/delete/" + id).then((response) => {
      axios.get("/snippets").then((response) => {
        console.log(response.data);
        this.setState({
          results: response.data
        });
      });
		});
	};

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
                <CM key={item._id} newid={item._id} body={item.body} title={item.title} deleteSnippet={this.deleteSnippet} options={options}/>
              );
            })
          }
      </div>
    );
  }
}

export default Search;