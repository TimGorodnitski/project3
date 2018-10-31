import React from "react";
const Card = props => (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Link:</strong> {props.Link}
          </li>
    
        </ul>
      </div>
      
    </div>
  );
  
  export default Card;
