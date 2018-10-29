import React from 'react';
import CodeMirror from 'react-codemirror';




class CM extends React.Component{
	state = {
		code: "test"
	}

	updateCode = (newCode) => {
		this.setState({
			code: newCode,
		});
	}

	render() {
		var options = {
			lineNumbers: true,
		};
		return <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} />
	}
};

export default CM;