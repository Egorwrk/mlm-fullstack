import React from 'react';
import { NavLink } from 'react-router-dom';

import 'css/NavBar.css';

const NavBar = () => {
  return (
    <div className='navBar'>
      <NavLink className='topBarItm' to='/templates'>my templates</NavLink>
      <NavLink className='topBarItm' to='/editor'>editor</NavLink>
    </div>
  );
};

export default NavBar;
