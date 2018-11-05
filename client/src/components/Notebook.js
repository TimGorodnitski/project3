import React from "react";

class Notebook extends React.Component {
    state = {
        styles: {
            card: {
                margin: "5px 5px 5px 5px",
                background:"#000000", 
                lineHeight: 2.5, 
                fontSize: "20px", 

            
            }
        }
    };

    render() {
        return (
            <div className="card">

                <div className="content" style = {this.state.styles.card}>
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
                {/* <button className="btn btn-outline-primary mt-2">AddComment</button> */}
            </div>

        );
    };
};

export default Notebook;