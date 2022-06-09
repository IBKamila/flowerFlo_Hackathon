import React, { useContext, useEffect, useState } from "react";
import { Badge } from "@mui/material";
import { cartContext } from "../../Context/CartContext";
import { authContext } from "../../Context/AuthContext";
import "./Navbar.css";
import logo from "../../Media/img/LOGO.png";
import shop from "../../Media/img/shop.png";
import user from "../../Media/img/user.png";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import Sidebar from "./Sidebar";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import fav from "../../Media/img/heart.svg";
import { favContext } from "../../Context/FavContext";

const Navbar = () => {
  const { cartLength } = useContext(cartContext);
  const { favLength } = useContext(favContext);

  const { email, handleLogout } = useContext(authContext);
  const [searchValue, setSearchValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (location.pathname === "/list") {
      setSearchParams({
        q: searchValue,
      });
    }
  }, [searchValue]);

  return (
    <nav>
      <div className="nav-wrapper" id="outer-container">
        <NavLink to="/">
          <img className="brand-logo" src={logo} alt="logo-img" />
        </NavLink>
        <Sidebar
          id="sidebarMenu"
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
        <ul class="left-ul">
          <li id="left-ul__first">
            <NavLink to="/list">Category</NavLink>
          </li>
          <li id="left-ul__second">
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          <li id="left-ul__last">
            {email === "admin@gmail.com" ? (
              <NavLink to="/">Admin panel</NavLink>
            ) : null}
          </li>
        </ul>
        <ul className="right-ul">
          <span className="wrap">
            <input
              className="search-inp"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              aria-label="Search"
            />
          </span>
          <li className="nav-icons">
            <NavLink to="/cart">
              <Badge badgeContent={cartLength} color="error">
                <img src={shop} alt="cart" />
              </Badge>
            </NavLink>
          </li>

          <li className="nav-icons">
            <NavLink to="/fav">
              <Badge badgeContent={favLength} color="error">
                <img src={fav} alt="cart" />
              </Badge>
            </NavLink>
          </li>

          <Tooltip title="Account settings">
            <li className="nav-icons">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <img src={user} alt="" />
              </IconButton>
            </li>
          </Tooltip>
        </ul>
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {email === "admin@gmail.com" ? (
        <NavLink className="logLinks" to="/add">
          <MenuItem>
          <AddCircleOutlineIcon fontSize="large"/> Add flower
          </MenuItem>
          </NavLink>
          ) : null}
        {email ? null : (
          <NavLink className="logLinks" to="/login">
            <MenuItem>
              <Avatar /> Log In
            </MenuItem>
          </NavLink>
        )}
        {email ? null : (
          <NavLink className="logLinks" to="/login">
            <MenuItem>
              <Avatar /> Sign Up
            </MenuItem>
          </NavLink>
        )}
        <Divider />
        {email ? (
          <a className="logLinks" to="/">
            <MenuItem>
              <ListItemIcon>
                <Logout onClick={handleLogout} fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </a>
        ) : null}
      </Menu>
    </nav>
  );
};

export default Navbar;
