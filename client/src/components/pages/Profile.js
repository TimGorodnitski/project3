import React from "react";
import "./Profile.css";
import CMresult from "../CMresult";
import Card from "../Card";
import axios from "axios";

class Profile extends React.Component {
  state = {
    results: [],
    articleResults: []
  };

  componentDidMount() {

    axios.get("/snippets/" + this.props.loggedIn.username).then((response) => {
      this.setState({
        results: response.data
      });

    });

    axios.get("/articles/" + this.props.loggedIn.username).then((res) => {
      this.setState({
        articleResults: res.data
      })
    })

  }

  deleteSnippet = (id) => {
		// send the entire state object to the back-end
		axios.delete("/delete/" + id).then((response) => {
            axios.get("/snippets/" + this.props.loggedIn.username).then((response) => {
                this.setState({
                results: response.data
            });
        });
		});
	};

  renderWelcome = (status) => {
    if(status){
      return <h1> {this.props.loggedIn.username}'s Profile </h1>
    }else{
      return <h1>Please Log In To See Your Profile</h1>
    }

  }
  deleteArticle = (id) =>{
    axios.delete(`/article/${id}`).then(response => {
      axios.get("/articles/" + this.props.loggedIn.username).then((res) => {
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
          {this.renderWelcome(this.props.loggedIn.username
            )}
          {
            this.state.results.map((item) => {
              // create a route-able link for each product
              return (
                <CMresult currentUser={this.props.loggedIn.username} key={item._id} data={item} deleteSnippet={this.deleteSnippet} options={options}/>
              );
            })
          }
          {
            this.state.articleResults.map((item) => {
              console.log(item)
              // create a route-able link for each product
              return (
                <Card id={item._id} currentUser={item.user} title={item.title} key={item.link} link={item.link} deleteArticle={this.deleteArticle}/>
              );
            })
          }

      </div>
    );
  }
}

export default Profile;