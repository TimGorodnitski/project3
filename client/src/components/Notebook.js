import React from "react";


const Notebook = props => {
    return (
        <div className="card">

            <div className="content">
                <ul>
                    <div>
                        <li>
                            <strong>noteTitle:{props.noteTitle}</strong>
                        </li>
                        <div />
                        <div>
                            <li>
                                <strong>Body:{props.body}</strong>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
            <button className="btn btn-outline-primary mt-2">AddComment</button>
        </div>

    );
}
export default Notebook;