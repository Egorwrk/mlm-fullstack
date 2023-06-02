import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from "react-redux";

import TemplatesPage from 'pages/TemplatesPage/TemplatesPage';
import EditorPage from 'pages/EditorPage/EditorPage';
import NavBar from 'components/NavBar';
import ViewerPage from 'pages/ViewerPage/ViewerPage';
import AuthorizationPage from 'pages/AuthorizationPage/AuthorizationPage';
import OnboardingPage from 'pages/OnboardingPage/OnboardingPage';
import {store} from "store/store";
import 'css/App.css';

function App() {
    const [logToggle, setLogToggle] = useState<boolean>(false);

    return (
        <BrowserRouter>
            <Provider store={store}>
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
                        <Route path={'/start'} component={OnboardingPage}/>
                        <Route path={'/auth'} component={AuthorizationPage}/>
                        <Route path={'/templates'} component={TemplatesPage}/>
                        <Route path={'/editor'} component={EditorPage}/>
                        <Route path={'/viewer'} component={ViewerPage}/>
                    </div>
                </div>
            </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;