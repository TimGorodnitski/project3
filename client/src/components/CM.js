import React from 'react';
import CodeMirror from 'react-codemirror';
import axios from "axios";
import "./Header.css";
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/htmlmixed/htmlmixed");
require("codemirror/mode/css/css");


class CM extends React.Component {

	state = {
		body: this.props.body || "",
		title: this.props.title || "",
		public: true,
		newid: this.props.newid,
		creator: this.props.currentUser,
		language: this.props.language || "javascript",
		options: {
			lineNumbers: true,
			theme: "dracula",
			mode: "javascript"
		},
		styles:{
			input: {
				width: "auto",
				display: "inline"
			}
		}
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

	handlePrivacyChange = () => {
		// update any state property with the input value of the same name
		if(this.state.public){
			this.setState({public: false})
		}else{
			this.setState({
			public: true
		});
		}

	};

	submitSnippet = (event) => {
		event.preventDefault();

		// send the entire state object to the back-end
		axios.post("/save", this.state).then((response) => {

			if (response.data !== true) {
				alert("Error. Snippet was not created.");
			}else{alert("Snippet saved!")};						
		});

	};


	onChangeHtml = (mode) => {
		let optionscopy = this.state.options;
		optionscopy.mode = mode;
		this.setState({options:optionscopy, language:mode})
	}
	

render() {

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
				<CodeMirror value={this.state.body} onChange={this.updateCode} options={this.state.options} />
				<button type="submit" className="btn btn-outline-primary mt-2 saveSnippetBtn">Create Snippet</button>
				<span className="languageText">Language: </span>
				<button type="button" className="btn btn-outline-primary mt-2 languageButtonJS" onClick={() => this.onChangeHtml('javascript')}> Javascript</button>
				<button type="button" className="btn btn-outline-primary mt-2 languageButtonHTML" onClick={() => this.onChangeHtml('htmlmixed')}> HTML</button>
				<button type="button" className="btn btn-outline-primary mt-2 languageButtonCSS" onClick={() => this.onChangeHtml('css')}> CSS</button>
				<h2>Private Snippet <input class="checkbox" type="checkbox" ref="privateCheck" style={this.state.styles.input} onChange={this.handlePrivacyChange} value="false" name="private"></input></h2>
			</form>

		</div>
	)
}
};

export default CM;