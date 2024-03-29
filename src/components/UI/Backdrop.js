import classes from "./Backdrop.module.css";
import React from "react";
const Backdrop = ({ Id, onClick }) => {
  return (
    <div containerId={Id}>
      <div className={classes.backdrop} onClick={onClick}></div>
    </div>
  );
};

export default Backdrop;
