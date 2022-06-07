import React, { useContext, useEffect } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import tag from "../../Media/img/tag.png";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const ProductList = () => {
  const { getProducts, products, prevPage, nextPage } =
    useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
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
              <span className="card-price2">{item.price}$</span>
            </div>
          </div>
        </NavLink>
      ))}
      <div className="btns">
        <Button onClick={() => prevPage()}>Назад</Button>
        <Button onClick={() => nextPage()}>Вперед</Button>
      </div>
    </div>
  );
};

export default ProductList;
