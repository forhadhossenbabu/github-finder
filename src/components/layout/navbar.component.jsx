import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => (
  <nav className="navbar bg-success">
    <h1>{title}</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
