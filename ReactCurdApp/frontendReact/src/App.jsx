import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AddProduct from "./components/addproduct.jsx";
import ViewProduct from "./components/viewProduct.jsx";
export default class App extends React.Component{
    
  render() {
    return <>
      <BrowserRouter>
          <nav className="navbar navbar-expand-lg p-3 bg-dark  pl-5">
          <NavLink className="nav-link text-danger" to={"/"}>Home </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <NavLink className="nav-link text-white" to={"/addproduct"}> Add New Products </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to={"/viewproduct"}> View Products </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/addproduct" element={ <AddProduct/>} />
          <Route path="/viewproduct" element={ <ViewProduct/>}/>
        </Routes>
      </BrowserRouter>
      

      </>
  }
}
