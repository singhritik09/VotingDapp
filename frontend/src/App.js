import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} ></Route>
          <Route exact path="/signup" Component={Signup} ></Route>
          <Route exact path="/home" Component={Home} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
