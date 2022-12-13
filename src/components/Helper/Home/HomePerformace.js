import React from "react";
import classes from "./HomePerformance.module.css";
const HomePerformance = () => {
  return (
    <div className={classes.performance}>
      <div className={classes.factlist}>
        <ul>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span>350</span>
              </h3>
              <p>Total Items</p>
            </div>
            <div className={classes.divider}></div>
          </li>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span>7</span>
              </h3>
              <p>Total Owner</p>
            </div>
            <div className={classes.divider}></div>
          </li>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span className={classes.price}>0.0050</span>
              </h3>
              <p>Floor Price &#40;ETH&#41;</p>
            </div>
            <div className={classes.divider}></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePerformance;

// className={classes.numbercount}
// data-from="0"
// data-to="350"
// data-speed="3000"
// data-decimals="1"
