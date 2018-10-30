import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="mb-4">
      <h1 className = "header">Code Snippet</h1>

      <Link to="/" className="badge badge-primary">Home</Link>
      {" "}
      <Link to="/resources" className="badge badge-primary">Resources</Link>
      {" "}
      <Link to="/search" className="badge badge-primary">Search</Link>
      {" "}
      <Link to="/new" className="badge badge-primary">New Snippet</Link>
    </header>
  );
};

export default Header;