import { useState, useEffect, useRef } from "react";
import React from "react";
import classes from "./HomePerformance.module.css";
const HomePerformance = () => {
  const myref = useRef();
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(myref.current);
  }, []);

  const [totalitems, setTotalitems] = useState(0);
  const [totalOwner, settotalOwner] = useState(0);
  const [floorprice, setfloorprice] = useState(0.0001);
  const datato = 350;

  if (myElementIsVisible === false && totalitems !== 0) {
    setTotalitems(0);
    settotalOwner(0);
    setfloorprice(0.0001);
  }
  const goToNext = () => {
    let newtotalitem = totalitems + 1;
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
    if (myElementIsVisible === true && totalitems < datato) {
      const interval = setInterval(() => {
        goToNext();
        goToNext1();
        goToNext2();
      }, 1);
      return () => clearInterval(interval);
    }
  });

  return (
    <div className={classes.performance}>
      <div className={classes.factlist}>
        <ul ref={myref}>
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
