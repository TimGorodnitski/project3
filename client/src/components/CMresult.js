import React from 'react';
import CodeMirror from 'react-codemirror';
import axios from "axios";

class CMresult extends React.Component{
	constructor(props){
		super(props)
	}
	

	state = {
		body: this.props.data.body || "",
		title: this.props.data.title || "",
		newid: this.props.data._id,
		createdAt: this.props.data.createdAt,
		creator: this.props.data.creator
	}

	handleInputChange = (event) => {
		// update any state property with the input value of the same name
		this.setState({
		  [event.target.name]: event.target.value
		});
	};
	
	updateCode = (newCode) => {
		this.setState({
			body: newCode,
		});
	}

	submitSnippet = (event) => {
		event.preventDefault();
		
		// send the entire state object to the back-end
		axios.post("/save", this.state).then((response) => {
			console.log(response)
		  if (response.data === true) {
				alert("Success")
		  }
		  // mongoose validation failed
		  else {
				alert("Error. Snippet was not created.");
		  }
		});
	};
	

	render() {
		var options = {
			lineNumbers: true
		};

		return (
			<div className="snippet-result">
				<form className="form" onSubmit={this.submitSnippet}>
				<span>Created by: {this.state.creator} </span><span>Date Created: {this.state.createdAt}</span>
					<input
					value={this.state.title}
					name="title"
					onChange={this.handleInputChange}
					type="text"
					placeholder="Snippet Title"
					className="form-control"
					/>
					<CodeMirror value={this.state.body} onChange={this.updateCode} options={options} />
					<button type="submit" className="btn btn-outline-primary mt-2">Save Snippet</button>
					<button type="button" className="btn btn-outline-primary mt-2"  onClick={() => this.props.deleteSnippet(this.state.newid)}> Delete Snippet</button>
				</form>

			</div>
		)
	}
};

export default CMresult;