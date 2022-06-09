import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { productContext } from "../../Context/ProductContext";
import Comments from "../Comments/Comments";
import leave from '../../Media/img/leave2.png'
import edit from '../../Media/img/edit.png'
import bag from '../../Media/img/bag.png'
import bag2 from '../../Media/img/bag2.png'
import heart from '../../Media/img/heart.png'
import rectangle from '../../Media/img/rectangle2.png'
import dollar from '../../Media/img/dollar-square.png'
import './FlowerDetails.css'
import { authContext } from "../../Context/AuthContext";
import { cartContext } from "../../Context/CartContext";



const FlowerDetails = () => {
  const { addProductToCart } = useContext(cartContext);
  const { email } = useContext(authContext)
  const { productDetails, getProductsDetails, deleteProduct } =
    useContext(productContext);
  let { id } = useParams();
  useEffect(() => {
    getProductsDetails(id);
  }, []);
  return (
    <>
    {productDetails ? (<>
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
        {email === "admin@gmail.com" ? (
        <div className="iconsDet">
          <NavLink to={`/edit/${id}`}>
            <img src={edit} alt="edit" />
          </NavLink>
          <NavLink to="/list">
            <img onClick={() => deleteProduct(id)} id="bag" src={bag} alt="bag" />
          </NavLink>
        </div>
        ) : null}
        {email &&  email != "admin@gmail.com"? (
          <div className="iconsDet">
          <a>
            <img onClick={() => deleteProduct(id)} src={heart} alt="heart" />
          </a>
          <NavLink to="/list">
            <img onClick={(e) => addProductToCart(productDetails)} id="bag" src={bag2} alt="bag" />
          </NavLink>
        </div>
        ) : null}
      </div>
    </div>
    <div className="underProd">
    < Comments id={productDetails.id} />
    </div> </>
  ) : null}
    </>
  );
};

export default FlowerDetails;
