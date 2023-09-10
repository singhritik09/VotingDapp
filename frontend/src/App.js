import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Status from "./components/Status";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Login} ></Route>
          <Route exact path="/signup" Component={Signup} ></Route>
          <Route exact path="/home" Component={Home} ></Route>
          <Route exact path="/status" Component={Status}></Route>
          <Route exact path="/logout" Component={Login} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
