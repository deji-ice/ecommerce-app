import React from "react";
  
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element ={<Home/>}/>    
      </Routes>
      <Routes>
        <Route path = "/products/:catergory" element ={<Products/>}/>    
      </Routes>
      <Routes>
        <Route path = "/product/:id" element ={<SingleProduct/>}/>    
      </Routes>
      <Routes>
        <Route path = "/cart" element ={<Cart/>}/>    
      </Routes>
      <Routes>
        <Route path = "/login" element= { user ? (<Navigate replace to= "/"/>) : (<Login/>) }/>   
      </Routes>
      <Routes>
        <Route path = "/register" element ={user ? (<Navigate replace to= "/"/>) : (<Register/>)}/>    
      </Routes>
    </Router>
  );
}

export default App;
