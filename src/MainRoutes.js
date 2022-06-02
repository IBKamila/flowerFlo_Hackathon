import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";


const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
  );
};

export default MainRoutes;