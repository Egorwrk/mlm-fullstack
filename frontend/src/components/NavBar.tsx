import React from 'react';
import { NavLink } from 'react-router-dom';

import 'css/NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink className='topBarItm' to='/main/templates'>my templates</NavLink>
    </div>
  );
};

export default NavBar;
