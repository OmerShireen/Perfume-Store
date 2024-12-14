import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./screens/Login.jsx";
function App() {


  return (
     
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    
  )
}
  export default App;