import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import TemplatesPage from 'pages/TemplatesPage/TemplatesPage';
import EditorPage from 'pages/EditorPage/EditorPage';
import ViewerPage from 'pages/ViewerPage/ViewerPage';
import AuthorizationPage from 'pages/AuthorizationPage/AuthorizationPage';
import OnboardingPage from 'pages/OnboardingPage/OnboardingPage';
import {store} from 'store/store';
import 'css/App.css';
import Layout from './components/Layout';

function App() {
    return (
        <Provider store={store}>
            <Routes>
                <Route path={'/'} element={<OnboardingPage/>}/>
                <Route path={'/auth'} element={<AuthorizationPage/>}/>
                <Route path={'/main'} element={<Layout/>}>
                    <Route path={'/main/templates'} element={<TemplatesPage/>}/>
                    <Route path={'/main/editor'} element={<EditorPage/>}/>
                    <Route path={'/main/viewer'} element={<ViewerPage/>}/>
                </Route>
            </Routes>
        </Provider>
    );
}

export default App;