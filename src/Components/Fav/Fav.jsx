import React, { useContext, useEffect } from "react";
import "./Fav.css";
import { favContext } from "../../Context/FavContext";

const Fav = () => {
  const { fav, getFav, deleteFavProduct } = useContext(favContext);

  useEffect(() => {
    getFav();
  }, []);

  return (
    <>
      <div class="FavContainer">
        <div class="Header">
          <h3 class="Heading">Favorites</h3>
          <h5 class="Action">Remove all</h5>
        </div>

        <div class="Fav-Items">
          {fav.products
            ? fav.products.map((elem) => (
                <>
                  <div class="image-box">
                    <img src={elem.item.img} style={{ height: "120px" }} />
                  </div>
                  <div class="about">
                    <h1 class="title">{elem.item.title}</h1>
                    <br />
                    <h3 class="subtitle">${elem.item.price}</h3>
                    <img style={{ height: "30px" }} />
                  </div>
                  <div class="counter"></div>
                  <div class="remove">
                    <u onClick={() => deleteFavProduct(elem.item.id)}>Remove</u>
                  </div>
                </>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Fav;
