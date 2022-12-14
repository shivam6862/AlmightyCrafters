import { useState, useEffect } from "react";
import React from "react";
import classes from "./HomePerformance.module.css";
const HomePerformance = () => {
  const [totalitems, setTotalitems] = useState(0);
  const [totalOwner, settotalOwner] = useState(0);
  const [floorprice, setfloorprice] = useState(0.0001);
  const datato = 350;
  const goToNext = () => {
    const newtotalitem = totalitems + 1;
    setTotalitems(newtotalitem);
  };
  const goToNext1 = () => {
    let newtotalOwner = totalOwner + 0.02;
    newtotalOwner = Math.round(newtotalOwner * 100) / 100;
    settotalOwner(newtotalOwner);
  };
  const goToNext2 = () => {
    let newfloorprice = floorprice + 0.0000141;
    newfloorprice = Math.round(newfloorprice * 1000000) / 1000000;
    setfloorprice(newfloorprice);
  };
  useEffect(() => {
    if (totalitems < datato) {
      const interval = setInterval(() => {
        goToNext();
        goToNext1();
        goToNext2();
      }, 5);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className={classes.performance}>
      <div className={classes.factlist}>
        <ul>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span>{totalitems}</span>
              </h3>
              <p>Total Items</p>
            </div>
            <div className={classes.divider}></div>
          </li>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span>{totalOwner.toFixed(0)}</span>
              </h3>
              <p>Total Owner</p>
            </div>
            <div className={classes.divider}></div>
          </li>
          <li>
            <div className={classes.items}>
              <h3 className={classes.data}>
                <span className={classes.price}>{floorprice.toFixed(4)}</span>
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
