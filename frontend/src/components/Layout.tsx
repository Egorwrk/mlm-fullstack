import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import NavBar from 'components/NavBar';

const Layout = () => {
    const [logToggle, setLogToggle] = useState<boolean>(false);
    return (
        <>
            <div className='App'>
                <div className='topBar'>
                    <NavBar/>
                    <div className='headerSeparator'/>
                    <button className='loginBtn'>
                        {logToggle ? <p>LogIn</p> : <p>LogOut</p>}
                    </button>
                </div>
                <div className='mainContainer'>
                    <div className='mainContent'>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;