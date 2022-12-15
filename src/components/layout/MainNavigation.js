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
        className={isNavExpanded ? classes.hamburgerchange : classes.hamburger}
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
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
            <NavLink
              to="/"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              <div className={classes.logo1}>
                <img src="./pictures/Pagecoverphoto4.1.jpg" alt="logo"></img>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aim"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              Aim
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/handmadeCollection"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              HandmadeCollection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alCollection"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
              AlCollection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              activeClassName={classes.active}
              onClick={() => {
                setIsNavExpanded(false);
              }}
            >
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
