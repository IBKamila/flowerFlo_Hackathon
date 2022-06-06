import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container-header">
        <div className="header-text" id="header-go">
          <h1>
            Welcome to our website! <br />
            Here you can get to know us a little better!
          </h1>
          <img
            className="flow"
            src="https://s3.amazonaws.com/files.enjin.com/434822/modules/forum/attachments/clipart-clothes-watercolor-6_1546132366.png"
            alt=""
          />
          <p>
            Flower Flo - is a site that will help you find and purchase plants
            according to your requirements.
            <br />
            On the site you will find from indoor plants to the most exotic!
            <br />
            When ordering our plants, you get a free consultation on care for a
            month! Here you will find plants for every taste!
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
