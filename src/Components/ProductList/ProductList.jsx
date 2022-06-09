import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter"
import Card from "./Card"


import { Button } from "@mui/material";

import { cartContext } from "../../Context/CartContext";


const ProductList = () => {
  const { getProducts, products, prevPage, nextPage } =
  useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(searchParams.get("category") || "all");

  const paramsWithCategory = () => {
    return {
      category: category,
      q: searchParams.get("q"),
    };
  };

  const paramsNoCategory = () => {
    return {
      q: searchParams.get("q") || "",
    };
  };

  useEffect(() => {
    if (searchParams.get("category")) {
      setSearchParams(paramsWithCategory());
    } else {
      setSearchParams(paramsNoCategory());
    }
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log('useEffect in product list')
    getProducts();
    if (category === "all") {
      setSearchParams(paramsNoCategory());
    } else {
      setSearchParams(paramsWithCategory());
    }
  }, [category, searchParams]);

  return (
    <div className="prodList">
      <div className="sideNav">
        <Filter category={category} setCategory={setCategory} />
      </div>
      <div className="cards">
        <Card/>
        </div>
        <div className="btns">
          <Button onClick={() => prevPage()}>Назад</Button>
          <Button onClick={() => nextPage()}>Вперед</Button>
        </div>
    </div>
  );
};

export default ProductList;