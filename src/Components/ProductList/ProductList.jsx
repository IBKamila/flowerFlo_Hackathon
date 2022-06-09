import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter"
import tag from "../../Media/img/tag.png";


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
        {products.map((item) => (
          <NavLink to={`/details/${item.id}`}>
            <div className="card">
              <div>
                <img className="imgList" src={item.img} alt="card" />
              </div>
              <div className="card-text">
                <span className="card-title">{item.title}</span>
                <p className="card-desc">{item.description}</p>
              </div>
              <div className="card-price">
                <img src={tag} alt="card-tag" />

                <button onClick={() => addProductToCart(item)}>Hui</button>

                <span className="card-price2">{item.price}$</span>
              </div>
            </div>
          </NavLink>
        ))}
        </div>
        <div className="btns">
          <Button onClick={() => prevPage()}>Назад</Button>
          <Button onClick={() => nextPage()}>Вперед</Button>
        </div>
    </div>
  );
};

export default ProductList;