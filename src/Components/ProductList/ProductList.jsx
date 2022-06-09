import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import tag from "../../Media/img/tag.svg";
import cart1 from "../../Media/img/bag-21.svg";
import { Button } from "@mui/material";
import { cartContext } from "../../Context/CartContext";
import fav from "../../Media/img/heart.svg";
import { favContext } from "../../Context/FavContext";

const ProductList = () => {
  const { getProducts, products, prevPage, nextPage } =
    useContext(productContext);

  const { addProductToCart } = useContext(cartContext);
  const { addProductToFav } = useContext(favContext);

  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") || "all"
  );

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
        <Filter
          className="filter"
          category={category}
          setCategory={setCategory}
        />
      </div>
      <div className="cards">
        {products.map((item) => (
          <div className="card">
            <div>
              <NavLink to={`/details/${item.id}`}>
                <img className="imgList" src={item.img} alt="card" />
              </NavLink>
              </div>
              <div className="card-text">
                <span className="card-title">{item.title}</span>
                <p className="card-desc">{item.description}</p>
              </div>
              <div className="card-price">
                <img
                  className="incFav"
                  src={fav}
                  onClick={() => addProductToFav(item)}
                ></img>

                <img src={tag} alt="card-tag" />

                <button onClick={() => addProductToCart(item)}>Hui</button>

                <span className="card-price2">{item.price}$</span>
              </div>
            </div>
            <div className="card-text">
              <span className="card-title">{item.title}</span>
              <p className="card-desc">{item.description}</p>
            </div>
            <div className="card-price">
              <img
                className="incCart"
                src={cart1}
                onClick={() => addProductToCart(item)}
              ></img>
              <img className="incSale" src={tag} alt="card-tag" />
              <span className="card-price2">{item.price}$</span>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <Button onClick={() => prevPage()}>Prev</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button onClick={() => nextPage()}>Next</Button>
      </div>
    </div>
  );
};

export default ProductList;
