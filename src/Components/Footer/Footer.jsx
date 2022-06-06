import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <div className="infoContact">
            <h1>Contacts</h1>
            <h2>Kyrgyzstan, Bishkek city Tabyshalieva street 29</h2>
            <h3>flowerflo@gmail.com</h3>
            <h3>+996(555443322)</h3>
          </div>
          <div className="imgIcon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
            <img src="https://cdn.worldvectorlogo.com/logos/telegram-1.svg"></img>
          </div>
          <img
            className="imageFlow"
            src="https://freepngimg.com/save/100276-watercolor-photos-flower-art-hd-image-free/1780x1684"
          ></img>
          <img
            className="imageFlow1"
            src="https://freepngimg.com/save/100276-watercolor-photos-flower-art-hd-image-free/1780x1684"
          ></img>
          <div>
            <p className="text">© TKN 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
