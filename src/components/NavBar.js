import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
      to="/"
      exact
      activeStyle={{
        background: 'darkpurple'
      }}
      >Home</NavLink>
      <NavLink 
      to="/movies"
      exact
      activeStyle={{
        background: 'darkpurple'
      }}
      >Movies</NavLink>
      <NavLink 
      to="/directors"
      exact
   
      activeStyle={{
        background: 'darkpurple'
      }}
      >Directors</NavLink>
      <NavLink 
      to="/actors"
      exact
   
      activeStyle={{
        background: 'darkpurple'
      }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
