import React from "react";
import { Route, Routes } from "react-router-dom";

import AboutUs from "./Components/AboutUs/AboutUs";

import AddProduct from "./Components/AddProduct/AddProduct";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import Login from "./Components/Auth/Login";


const MainRoutes = () => {
  return (
    <Routes>

      <Route path="/aboutUs" element={<AboutUs />} />

        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/list" element={<ProductList />}/>
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
