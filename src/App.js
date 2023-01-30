import React from "react";
import './App.css';
import Login from "./logins/login";
import Reg from "./forms/regform";
import { Routes, Route, Link } from 'react-router-dom';
import One from "./one";
import Two from "./two";
import Navs from "./navs/nav";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      

      <Route path="/" element={<Navs/>}> 
      <Route path="/reg" element={<Reg/>}></Route>
      <Route path="/one" element={<One/>}></Route>
      <Route path="/two" element={<Two/>}></Route>
      </Route>

      </Routes>

     
      
   

    <Link to="/"></Link>

    </div>
  );
}

export default App;
