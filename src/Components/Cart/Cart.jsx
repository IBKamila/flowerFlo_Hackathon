import React, { useContext, useEffect } from "react";
import veg from "../../Media/img/veg.png";
import { cartContext } from "../../Context/CartContext";
import "./Cart.css";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, getCart, deleteCartProduct, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <>
      <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
   	   	<h5 class="Action">Remove all</h5>
   	   </div>

   	   <div class="Cart-Items">
        {cart.products
            ? cart.products.map((elem) => (<>
   	   	  <div class="image-box">
   	   	  	<img src={elem.item.img} style={{ height:"120px" }} />
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">{elem.item.title}</h1>
              <br/>
   	   	  	<h3 class="subtitle">${elem.item.price}</h3>
   	   	  	<img src={veg} style={{ height:"30px" }}/>
   	   	  </div>
   	   	  <div class="counter">
            <input
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />{" "}
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">${elem.subPrice}</div>
   	   	  	<div class="save"><u>Save for later</u></div>
   	   	  	<div class="remove" ><u onClick={() => deleteCartProduct(elem.item.id)}>Remove</u></div>
   	   	  </div>
            </>))
            : null}
   	   </div>

   	   
   	 <hr/> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">{cart.count}</div>
   	 	</div>
   	 	<div class="total-amount">${cart.totalPrice}</div>
   	 </div>
      <NavLink to="/form">
   	 <button class="button">Order</button></NavLink></div>
   </div>
   </>
  );


};

export default Cart;
