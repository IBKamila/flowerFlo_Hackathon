import React, { useContext, useEffect } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import tag from "../../Media/img/tag.png";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);

  const { addProductToCart } = useContext(cartContext);

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
              <button onClick={() => addProductToCart(item)}>Hui</button>
              <span className="card-price2">{item.price}$</span>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ProductList;
