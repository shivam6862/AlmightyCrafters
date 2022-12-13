import React from "react";
import classes from "./Home.module.css";
import HomePerformance from "../components/Helper/Home/HomePerformace";
import Photoslider from "../components/Helper/Home/Photoslider";

import Button from "../components/Button/Button";
const Home = () => {
  return (
    <div className={classes.heading}>
      <h1 className={classes.homeHeading}>ALMIGHTY CRAFTERS</h1>
      <Photoslider></Photoslider>
      <p className={classes.homeParagraph}>
        Almighty crafters is the unique world in digital era. There are various
        communities living her representing there diverse culture in there own
        ways. Characters here have there own chain of thoughts which lead to
        indifferent code of conduct. No two person here are same. Yet they are
        trying to find a way to live in this chaotic world.
      </p>
      <div className={classes.button}>
        <Button
          onClick={() =>
            window.open(
              "https://opensea.io/Almighty_Crafters?search[sortBy]=LAST_SALE_PRICE&search[toggles][0]=BUY_NOW"
            )
          }
        >
          Buy now
        </Button>
      </div>
      <HomePerformance></HomePerformance>
    </div>
  );
};

export default Home;
