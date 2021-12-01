import React from "react";
// import Button from "./Button";
import "../index.css";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
        <Link to="/contact">Contact</Link>
        {/* <Button /> */}
      </div>
    </div>
  );
}

export default Navbar;
