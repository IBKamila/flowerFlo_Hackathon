import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "./Components/AddProduct/AddProduct";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/list" element={<ProductList />}/>
    </Routes>
  );
};

export default MainRoutes;