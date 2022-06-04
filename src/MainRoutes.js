import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Home from "./Components/Home/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
};

export default MainRoutes;
