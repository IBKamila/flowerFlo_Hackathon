import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../Media/img/LOGO.png";
import shop from "../../Media/img/shop.png";
import user from "../../Media/img/user.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <div className="nav-wrapper">
        <span className="brand-logo">
          <NavLink to="/">
            <img src={logo} alt="logo-img" />
          </NavLink>
        </span>
        <ul class="left-ul">
          <li id="left-ul__first">
            <a href="sass.html">Catalog</a>
          </li>
          <li id="left-ul__second">
            <NavLink to="/aboutUs">
              {/* <a href="badges.html"> */}
              About us
              {/* </a> */}
            </NavLink>

          </li>
        </ul>
        <ul className="right-ul">
          <span className="wrap">
            <input className="search-inp" type="search" aria-label="Search" />
          </span>
          <li className="nav-icons">
            <a href="badges.html">
              <img src={shop} alt="" />
            </a>
          </li>
          <li className="nav-icons">


            {/* <a href="badges.html"> */}
            <NavLink to="/login">
              <img src={user} alt="" />
              {/* </a> */}
            </NavLink>

          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
