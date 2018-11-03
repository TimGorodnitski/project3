import React from "react";
import axios from "axios";

class Card extends React.Component {
    state = {
        noteTitle: "",
        body: "",
        styles: {
            card: {
                margin: "5px, 5px, 5px, 5px",
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
                padding: 20
            }
        }
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

    render() {
        return (

            <div className="card" style={this.state.styles.card}>

                <div className="content">
                    <ul>
                        <div>
                            <li style={this.state.styles.title}>
                                <strong>Title:{this.props.notetitle}</strong>
                            </li>

                            <li style={this.state.styles.link}>
                                <strong>Link:<a href={this.props.link} target="_blank">{this.props.link}</a></strong>
                            </li>
                        </div>
                    </ul>
                    <div>
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
                    </div>

                    <button className="btn btn-outline-primary mt-2" onClick={this.submitNote}>AddComment</button>
                    <button className="btn btn-outline-primary mt-2">LikeArticle</button>
                </div>

            </div>

        )
    }
}
export default Card;
