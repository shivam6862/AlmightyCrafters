import { Fragment } from "react";
import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <div className={classes.mainNav}>
        <MainNavigation />
      </div>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
