import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddProduct from "./components/addproduct.jsx";
import ViewProduct from "./components/viewProduct.jsx";
export default class App extends React.Component{
    
  render() {
    return <>
      <BrowserRouter>



  <nav class="navbar navbar-expand-lg p-3 bg-dark  pl-5">
   <NavLink className="nav-link text-danger" to={"/"}>Home </NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ">
      <li class="nav-item active">
        <NavLink className="nav-link text-white" to={"/addproduct"}> Add New Products </NavLink>
      </li>
      <li class="nav-item">
         <NavLink className="nav-link text-white" to={"/viewproduct"}> View Products </NavLink>
      </li>

    </ul>
  </div>
</nav>
        <Routes>
          <Route path="/" element={ <h1>Home Component </h1>}    />
          <Route path="/addproduct" element={ <AddProduct/>} />
          <Route path="/viewproduct" element={ <ViewProduct/>}/>
        </Routes>
      </BrowserRouter>
      

      </>
  }
}
