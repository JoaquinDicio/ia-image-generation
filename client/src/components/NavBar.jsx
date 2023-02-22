import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar py-3 px-5 shadow-sm w-100 d-flex justify-content-between">
      <Link to="/">
        <img src="src\assets\logo.png" alt="logo" className="logo" />
      </Link>
      <Link to="/post">
        <button className="btn btn-primary rounded">Create</button>
      </Link>
    </div>
  );
}
