import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TemplatesPage from "./pages/TemplatesPage/TemplatesPage";
import EditorPage from "./pages/editorPage/EditorPage";
import NavBar from "./NavBar";

function App() {
  const [logToggle, setLogToggle] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="topBar">
          <NavBar />
          <div className="headerSeparator"/>
          <button className="loginBtn">
            {logToggle ? <text>LogIn</text> : <text>LogOut</text>}
          </button>
        </div>
        <div className="mainContainer">
          <div className="mainContent">
            <Route path={"/templates"} component={TemplatesPage} />
            <Route path={"/editor"} component={EditorPage} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
