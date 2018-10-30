import React from 'react';
import CodeMirror from 'react-codemirror';
import axios from "axios";

class CM extends React.Component{
	state = {
		body: this.props.body || "",
		title: this.props.title || ""
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
					<input
					value={this.state.title}
					name="title"
					onChange={this.handleInputChange}
					type="text"
					placeholder="Snippet Title"
					className="form-control"
					/>
					<CodeMirror value={this.state.body} onChange={this.updateCode} options={options} />
					<button className="btn btn-outline-primary mt-2">Save Snippet</button>

				</form>



			</div>
		)
		
	}
};

export default CM;