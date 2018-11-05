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

    axios.get("/snippets/" + this.props.currentUser).then((response) => {

      console.log(response.data);

      this.setState({
        results: response.data
      });

    });

    axios.get("/articles/" + this.props.currentUser).then((res) => {
      this.setState({
        articleResults: res.data
      })
    })

  }

  deleteSnippet = (id) => {
		console.log("delete _id: " + id)
		// send the entire state object to the back-end
		axios.delete("/delete/" + id).then((response) => {
            axios.get("/snippets/" + this.props.currentUser).then((response) => {
                console.log(response.data);
                this.setState({
                results: response.data
            });
        });
		});
	};

  renderWelcome = (status) => {
    if(status){
      return <h1> {this.props.currentUser}'s Profile </h1>
    }else{
      return <h1>Please Log In To See Your Profile</h1>
    }

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
                <CMresult currentUser={this.props.currentUser} key={item._id} data={item} deleteSnippet={this.deleteSnippet} options={options}/>
              );
            })
          }
          {
            this.state.articleResults.map((item) => {
              // create a route-able link for each product
              return (
                <Card currentUser={item.user} title={item.title} key={item.link} link={item.link} />
              );
            })
          }

      </div>
    );
  }
}

export default Profile;