import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import leave from '../../Media/img/leave2.png'
import edit from '../../Media/img/edit.png'
import bag from '../../Media/img/bag.png'
import rectangle from '../../Media/img/rectangle2.png'
import dollar from '../../Media/img/dollar-square.png'
import './FlowerDetails.css'

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
    
    <div className="contDet">
      <div className="contDet-photo">
        <img className="det-photo" src={productDetails.img} alt="detailPhoto" />
      </div>
      <div className="contDet-desc">
        <img className="leaveDet" src={leave} alt="leave" />
        <div className="titleDet">{productDetails.title}</div>
        <img className="rectangleDet" src={rectangle} alt="rectangle" />
        <div className="priceDet"><img className="dollar" src={dollar} alt="dollar" />{productDetails.price}</div>
        <div className="descDet"><p className="descDet-p">{productDetails.description}</p></div>
        <div className="iconsDet">
          <NavLink to={`/edit/${id}`}>
            <img onClick={() => deleteProduct(id)} src={edit} alt="edit" />
          </NavLink>
          <NavLink to="/list">
            <img id="bag" src={bag} alt="bag" />
          </NavLink>
        </div>
      </div>
    </div>
    ) : null}
    </>
  );
};

export default FlowerDetails;
