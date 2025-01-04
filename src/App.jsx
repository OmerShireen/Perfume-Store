import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./screens/Home.jsx";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from "./screens/Login.jsx";
import Cart from "./screens/Cart.jsx";
import Signup from "./screens/Signup.jsx";
import UserPage from "./components/UserPage.jsx";
import ProtectedRoutes from "./routes/ProtectedRoutes.jsx"
import ProductDetails from "./components/ProductDetails.jsx";
function App() {


  return (
     
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/user" element={<ProtectedRoutes><UserPage/></ProtectedRoutes>}/>
          <Route path="/product-details/:id" element={<ProductDetails />} />

        </Routes>
      </Router>
    
  )
}
  export default App;