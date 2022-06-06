import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";

const FlowerDetails = () => {
  const { productDetails, getProductsDetails, deleteProduct } =
    useContext(productContext);
  let { id } = useParams();
  useEffect(() => {
    getProductsDetails(id);
  }, []);
  return (
    <>
      {productDetails ? (
        <>
          <h2>{productDetails.title}</h2>
          <NavLink to="/list">
            <button onClick={() => deleteProduct(id)}>delete</button>
          </NavLink>
          <NavLink to={`/edit/${id}`}>
            <button>edit</button>
          </NavLink>
        </>
      ) : null}
    </>
  );
};

export default FlowerDetails;
