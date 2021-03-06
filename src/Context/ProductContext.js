import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";

export const productContext = createContext();

const API = "http://localhost:8000/products";

const INIT_STATE = {
  products: [],
  productDetails: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_PRODUCTS_DETAILS":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
};

// let page = 1;
// let totalPage = [];

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const addProduct = async (newProduct) => {
    await axios.post(API, newProduct);
  };
  async function addComments(id, comments) {
    await axios.patch(API, comments);
    getProducts();
  }
  const getProducts = async () => {
    const { data } = await axios.get(`${API}${location.search}`);

    // `${API}?_page=${page}&_limit=2&q=${searchVal}`
    // );

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
    // totalPageFunc();
  };

  const getProductsDetails = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_PRODUCTS_DETAILS",
      payload: data,
    });
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  const editProduct = async (id, prodObj) => {
    await axios.patch(`${API}/${id}`, prodObj);
    getProducts();
  };

  // const productsLimit = 2;

  // async function totalPageFunc() {
  //   let { data } = await axios.get(API);
  //   totalPage = Math.ceil(data.length / productsLimit);
  // }

  // const prevPage = () => {
  //   if (page <= 1) return;
  //   page++;
  //   getProducts();
  // };

  // const nextPage = () => {
  //   if (totalPage <= page) return;
  //   page++;
  //   getProducts();
  // };

  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        addProduct,
        addComments,
        getProducts,
        getProductsDetails,
        deleteProduct,
        editProduct,
        // prevPage,
        // nextPage,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
