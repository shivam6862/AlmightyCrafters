import React from "react";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div>Copyright &#169; IITR 2022 : &#41;</div>
      <div>
        Made with <img src="./pictures/heart.png" alt="made" /> by{" "}
        {/* <a href="https://www.google.com"> */}
          Shivam_Kr
        {/* </a> */}
      </div>
    </div>
  );
}

export default Footer;
