import React from "react";
import axios from "axios";
// import Notebook from "./Notebook";


class Card extends React.Component {
    state = {
        noteTitle: "",
        body: "",
        ID: this.props.currentUser,
        page: "",
        styles: {
            card: {
                margin: "10px 5px 10px 5px",
                background: "#e8eaf6"
            },
            title: {
                background: "#3f51b5",
                minHeight: 50,
                lineHeight: 3.5,
                fontSize: "1.2rem",
                color: "white",
                padding: "0 20px"
            },
            link: {
                background:"#00FF00"
            }
        }
    };
    componentDidMount(){
        console.log(this.props);
    }
    
      sayWelcome = () => {
            if(!this.status.logIn){
              return <h1>Welcome to {this.props.currentUser}'s Resource Page </h1>
            }
            else{
              return <h1>Please Log In To See Your Favorite Articles</h1>
            }
        
          }
    
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    deleteArticle =()=>{
        this.props.deleteArticle(this.props.id)
    }
   
	likeArticle = (event) => {
		event.preventDefault();
    
        var liked = {
            title: this.props.title,
            link: this.props.link,
            user: this.props.currentUser
        }

		axios.post("/likeArticle", liked).then((response) => {
			console.log(response)
		  if (response.data === true) {
				alert("Success")
		  }
		
		  else {
				alert("likePage to db");
		  }
        });
        
    
	};

	submitNote = (event) => {
		event.preventDefault();
		
		// send the entire state object to the back-end
		axios.post("/note", this.state).then((response) => {
			console.log(response)
		  if (response.data === true) {
				alert("Success")
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Note was not created.");
		  }
        });
        
        this.setState({noteTitle: "", body: ""})
    };
    
    renderDeleteButton(){
        if(this.props.page==="profile"){
            return <button className="btn btn-outline-primary mt-2" onClick={this.deleteArticle}>DeleteMePlease</button>
        }
    }

    render() { 
        // if(!this.state.deleted){
            return (
                <div>
                {/* {this.sayWelcome()} */}
                <div className="card" style={this.state.styles.card}>
                    <div className="content">
                        <ul>
                            <div>
                                <li style={this.state.styles.title}>
                                    <strong>Title:  {this.props.title}</strong>
                                </li>
    
                                <li style={this.state.styles.link}>
                                    <strong>Link:  <a href={this.props.link} target="_blank">{this.props.link}</a></strong>
                                </li>
                            </div>
                        </ul>
                        {/* <div>
                            <textarea
                                value={this.state.noteTitle}
                                name="noteTitle"
                                onChange={this.handleInputChange}
                                placeholder="Add NoteTitle"
                                className="form-control mt-2"
                            />
                            <input
                                value={this.state.body}
                                name="body"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Add comment"
                                className="form-control mt-2"
                            />
                        </div> */}
    
                        {/* <button className="btn btn-outline-primary mt-2" onClick={this.submitNote}>AddComment</button> */}
                        <button className="btn btn-outline-primary mt-2" onClick={this.likeArticle}>LikeArticle</button>
                        {this.renderDeleteButton()}
                    </div>
                    {/* <div>
                        <h1>Notes</h1>
                        <Notebook noteTitle={this.props.title} />
                    </div> */}
    
    
    
                </div>
                </div>
    
            )
        // } else {
        //     return(
        //         <div></div>
        //     )
        // }

    }
}
export default Card;
