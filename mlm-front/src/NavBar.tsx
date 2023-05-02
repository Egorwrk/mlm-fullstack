import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <NavLink to="/templates">my temlates</NavLink>
      <NavLink to="/editor">editor</NavLink>
    </div>
  );
};

export default NavBar;
