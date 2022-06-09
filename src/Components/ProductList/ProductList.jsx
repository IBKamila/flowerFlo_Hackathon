import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import { NavLink, useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter";
import tag from "../../Media/img/tag.svg";
import cart1 from "../../Media/img/bag-21.svg";
import { cartContext } from "../../Context/CartContext";
import fav3 from "../../Media/img/heart3.svg";
import { favContext } from "../../Context/FavContext";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const { getProducts, products } = useContext(productContext);

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
    console.log("useEffect in product list");
    getProducts();
    if (category === "all") {
      setSearchParams(paramsNoCategory());
    } else {
      setSearchParams(paramsWithCategory());
    }
  }, [category, searchParams]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  // !pagination

  const [pageNumber, setPageNumber] = useState(0);
  const productsLimit = 2;
  const productVisited = pageNumber * productsLimit;

  const pageCount = Math.ceil(products.length / productsLimit);
  let sliceTwoIndex = productVisited + productsLimit;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

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
        {products.slice(productVisited, sliceTwoIndex).map((item) => (
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
                src={fav3}
                onClick={() => addProductToFav(item)}
              ></img>
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
      <ReactPaginate
        className="pgnt"
        previousLabel={"PREV"}
        nextLabel={"NEXT"}
        pageCount={pageCount}
        containerClassNAme={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClasName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        onPageChange={changePage}
      />
    </div>
  );
};

export default ProductList;
