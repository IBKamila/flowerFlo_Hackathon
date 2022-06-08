import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../Context/ProductContext";
import "./ProductList.css";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";
import Filter from "../Filter/Filter"


const ProductList = () => {
  const { getProducts} = useContext(productContext)

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
        <Card/>
      </div>
    </div>
  );
};

export default ProductList;
