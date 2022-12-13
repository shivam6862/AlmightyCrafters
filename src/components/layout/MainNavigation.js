// https://blog.logrocket.com/create-responsive-navbar-react-css/
import { NavLink } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Button from "../Button/Button";
import classes from "./MainNavigation.module.css";
import Backdrop from "../UI/Backdrop";

const MainNavigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className={classes.navigation}>
      <NavLink to="/" activeClassName={classes.active}>
        <div className={classes.logo}>
          <img src="./pictures/logo.jpg" alt="logo"></img>
        </div>
      </NavLink>
      <button
        className={classes.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isNavExpanded && (
        <Backdrop
          Id="backdrop"
          onClick={() => setIsNavExpanded(isNavExpanded)}
        />
      )}

      <div
        className={
          isNavExpanded
            ? classes.navigationmenuexpanded
            : classes.navigationmenu
        }
      >
        <ul>
          <li className={classes.first}>
            <NavLink to="/" activeClassName={classes.active}>
              <div className={classes.logo1}>
                <img src="./pictures/Pagecoverphoto4.1.jpg" alt="logo"></img>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/aim" activeClassName={classes.active}>
              Aim
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" activeClassName={classes.active}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/handmadeCollection" activeClassName={classes.active}>
              HandmadeCollection
            </NavLink>
          </li>
          <li>
            <NavLink to="/alCollection" activeClassName={classes.active}>
              AlCollection
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" activeClassName={classes.active}>
              Community
            </NavLink>
          </li>
          <li className={classes.button}>
            <Button
              onClick={() =>
                window.open("https://opensea.io/Almighty_Crafters?tab=created")
              }
            >
              Buy now
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavigation;
