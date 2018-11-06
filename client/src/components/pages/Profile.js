import React from "react";
import "./Profile.css";
import CMresult from "../CMresult";
import Card from "../Card";
import axios from "axios";
import Notebook from "../Notebook";

class Profile extends React.Component {
  state = {
    results: [],
    articleResults: [],
    noteResult: []
  };

  componentDidMount() {
    axios.get("/snippets/" + this.props.currentUser).then((response) => {
      this.setState({
        results: response.data
      });

    });

    axios.get("/articles/" + this.props.currentUser).then((res) => {
      this.setState({
        articleResults: res.data
      })
    });

    axios.get("/noteCreated").then((response) => {
      this.setState({
        noteResult: response.data
      });
    });

  }

  deleteSnippet = (id) => {
    // send the entire state object to the back-end
    axios.delete("/delete/" + id).then((response) => {
      axios.get("/snippets/" + this.props.currentUser).then((response) => {
        this.setState({
          results: response.data
        });
      });
    });
  };

  renderWelcome = (status) => {
    if (status) {
      return <h1> {this.props.currentUser}'s Profile </h1>
    } else {
      return <h1>Please Log In To See Your Profile</h1>
    }

  }
  deleteArticle = (id) => {
    axios.delete(`/article/${id}`).then(response => {
      axios.get("/articles/" + this.props.currentUser).then((res) => {
        this.setState({
          articleResults: res.data
        })
      })
    }).catch(err => console.log(err))
  }


  render() {
    var options = {
      lineNumbers: true
    }

    return (
      <div>
        {this.renderWelcome(this.props.loggedIn)}
        {
          this.state.results.map((item) => {
            // create a route-able link for each product
            return (
              <CMresult currentUser={this.props.currentUser} key={item._id} data={item} deleteSnippet={this.deleteSnippet} options={options} />
            );
          })
        }
        {
          this.state.noteResult.map((memo) => {
            // create a route-able link for each product
            return (
              <Notebook currentUser={this.props.currentUser} noteTitle={memo.noteTitle} body={memo.body} />
            );
          })
        }



      </div>
    );
  }
}

export default Profile;