import React from "react";

class Notebook extends React.Component {
    state = {
        noteTitle:"", 
        currentUser: this.props.currentUser, 
        body:"", 
        styles: {
            card: {
                margin: "5px 5px 5px 5px",
                background: "#000000",
                lineHeight: 2.5,
                fontSize: "20px",


            }
        }
    };

    handleInputChange = event => {
    
        const { name, value } = event.target;
    
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
    
        event.preventDefault();
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        // alert(`Hello ${this.state.noteTitle} ${this.state.body}`);
        this.setState({
          noteTitle: "",
          body: ""
        });
      };



    render() {
        return (
            <div className="card">

                <div className="content" style={this.state.styles.card}>
                    <ul>
                        <div>
                            <li>
                                <strong>noteTitle:  {this.props.noteTitle}</strong>
                            </li>
                            <li>
                                <strong>Body:  {this.props.body}</strong>
                            </li>
                        </div>
                    </ul>
                </div>
            
                <button className="btn btn-outline-primary mt-2">AddComment</button>
            </div>

        );
    };
};

export default Notebook;