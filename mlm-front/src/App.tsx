import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import TemplatesPage from "./pages/TemplatesPage";
import EditorPage from "./pages/EditorPage";
import NavBar from "./NavBar";

function App() {
  const [logToggle, setLogToggle] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="topBar">
          <button className="loginBtn">
            {logToggle ? <text>LogIn</text> : <text>LogOut</text>}
          </button>
        </div>
        <div className="mainContainer">
          <div className="leftMenu">
            <NavBar />
          </div>
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
