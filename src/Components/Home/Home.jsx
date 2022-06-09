import React, { useContext } from "react";
import { productContext } from "../../Context/ProductContext";
import tag from "../../Media/img/tag.png";
import text from "../../Media/img/text.png";
import rect from "../../Media/img/rectangle.png";
import leave from "../../Media/img/leave.png";
import star from "../../Media/img/star.png";
import heart from "../../Media/img/heart-circle.png";
import frash from "../../Media/img/flash.png";
import gift from "../../Media/img/gift.png";
import line from "../../Media/img/line.png";
import line2 from "../../Media/img/line2.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  const { products, prevPage, nextPage } = useContext(productContext);

  return (
    <>
      <div className="container-head">
        <img className="back-text" src={text} alt="text-img" />
        <div className="block-left">
          <span id="bl-1">Your home is where your plants are!</span>
          <br />
          <br />
          <br />
          <br />
          <span id="bl-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            pariatur exercitationem, quisquam corporis quae saepe vel, atque
            vitae, perferendis magni nobis inventore? Nostrum reprehenderit nam
            nobis, dolorum beatae similique eveniet?
          </span>
        </div>
        <img id="rect" src={rect} alt="rect" />
      </div>
      <div className="sectionFirst">
        <div className="siteBar">
          <img id="leave" src={leave} alt="" />
          <ul className="siteBar-ul">
            <li>
              <img src={star} alt="star" />
              <a href="#" className="sb-lists">
                New
              </a>
            </li>
            <img src={line} alt="line" />
            <li>
              <img src={heart} alt="heart" />
              <a href="#" className="sb-lists">
                Popular
              </a>
            </li>
            <img src={line} alt="line" />
            <li>
              <img src={frash} alt="frash" />
              <a href="#" className="sb-lists">
                Sale
              </a>
            </li>
            <img src={line} alt="line" />
            <li>
              <img src={gift} alt="gift" />
              <a href="#" className="sb-lists">
                Gift certificates
              </a>
            </li>
            <img src={line2} alt="line" />
          </ul>
        </div>
        <div className="homeCards">
          {products.map((item) => (
            <NavLink to={`/details/${item.id}`}>
              <div className="cardHome">
                <div>
                  <img className="imgListHome" src={item.img} alt="card" />
                </div>
                <div className="card-textHome">
                  <span className="card-titleHome">{item.title}</span>
                  <p className="card-descHome">{item.description}</p>
                </div>
                <div className="card-priceHome">
                  <img src={tag} alt="card-tagHome" />
                  {item.price}$
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="batns">
        <Button onClick={() => prevPage()}>Prev</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button onClick={() => nextPage()}>Next</Button>
      </div>
    </>
  );
};

export default Home;
