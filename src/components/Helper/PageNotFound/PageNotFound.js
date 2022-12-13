import classes from "./PageNotFound.module.css";
import React from "react";
import Button from "../../Button/Button";
const PageNotFound = () => {
  return (
    <div>
      <div className={classes.error}>
        <h3>404: Foundn't</h3>
        <h4>Content not found</h4>
      </div>
      <div className={classes.errorbutton}>
        <Button
          onClick={() =>
            window.open(
              "https://youtu.be/dQw4w9WgXcQ?t=43"
            )
          }
        >
          <h6>Go Back!</h6>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
