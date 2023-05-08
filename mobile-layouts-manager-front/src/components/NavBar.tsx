import React from 'react';
import '../assets/NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink className='topBarItm' to='/templates'>my templates</NavLink>
      <NavLink className='topBarItm' to='/editor'>editor</NavLink>
    </div>
  );
};

export default NavBar;
