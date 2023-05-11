import React, {useState} from 'react';
import './assets/App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import TemplatesPage from './pages/TemplatesPage/TemplatesPage';
import EditorPage from './pages/EditorPage/EditorPage';
import NavBar from './components/NavBar';
import ViewerPage from './pages/ViewerPage/ViewerPage';
import AuthorizationPage from './pages/AuthorizationPage/AuthorizationPage';

function App() {
    const [logToggle, setLogToggle] = useState<boolean>(false);

    return (
        <BrowserRouter>
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
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={'/authorization'}/>}/>
                            <Route path={'/authorization'} render={() => <AuthorizationPage/>}/>
                            <Route path={'/templates'} render={() => <TemplatesPage/>}/>
                            <Route path={'/editor'} render={() => <EditorPage/>}/>
                            <Route path={'/viewer'} render={() => <ViewerPage/>}/>
                            <Route path='*' render={() => <p>404 NOT FOUND</p>}/>
                        </Switch>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
