import React from "react";
import "./Search.css";
import CMresult from "../CMresult";
import axios from "axios";

class Search extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    axios.get("/allsnippets").then((response) => {
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
      lineNumbers: true,
      theme: "dracula"
    }
    
    return (
      <div>
          <h1> All Public Snippets </h1>
          {
            this.state.results.map((item) => {
              // create a route-able link for each product
              return (
                <CMresult key={item._id} data={item} deleteSnippet={this.deleteSnippet} options={options}/>
              );
            })
          }
      </div>
    );
  }
}

export default Search;