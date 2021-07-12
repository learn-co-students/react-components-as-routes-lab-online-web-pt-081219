import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={link} activeStyle={{ background: "green" }}>
        Home
      </NavLink>
      <NavLink to="/movies" style={link} activeStyle={{ background: "green" }}>
        Movies
      </NavLink>
      <NavLink to="/actors" style={link} activeStyle={{ background: "green" }}>
        Actors
      </NavLink>
      <NavLink
        to="/directors"
        style={link}
        activeStyle={{ background: "green" }}
      >
        Directors
      </NavLink>
    </div>
  );
};

export default NavBar;
