import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import AddProduct from "./Components/AddProduct/AddProduct";
import Home from "./Components/Home/Home";
import ProductList from "./Components/ProductList/ProductList";
import Login from "./Components/Auth/Login";
import EditFlower from "./Components/EditFlower/EditFlower";
import FlowerDetails from "./Components/FlowerDetails/FlowerDetails";
import Cart from "./Components/Cart/Cart";
import PaymentForm from "./Components/PaymentForm/PaymentForm";
import Fav from "./Components/Fav/Fav";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/edit/:id" element={<EditFlower />} />
      <Route path="/details/:id" element={<FlowerDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/form" element={<PaymentForm />} />
      <Route path="/fav" element={<Fav />} />
    </Routes>
  );
};

export default MainRoutes;
