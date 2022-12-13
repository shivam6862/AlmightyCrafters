import React from "react";
import Button from "../components/Button/Button";
import Collection from "../components/Helper/HandmadeCollection/Collection";
import classes from "./HandmadeCollection.module.css";
const HandmadeCollection = () => {
  return (
    <div className={classes.collection}>
      <div className={classes.title}>
        <h3>Our Handcrafted Collection</h3>
      </div>
      <Collection />
      <div className={classes.btnDescription}>
        <div className={classes.Totaldescription}>
          <div className={classes.description}>
            <p>
              Our handmade collections are result of hardwork of our artists and
              designers in Almighty Crafters. These are drawn with hands based
              on imagination and thoughts of artists. Thus resulting in precise
              conversion of one's thoughts into lively images. Therefore, these
              arts have special place in our hearts.
            </p>
          </div>
          <div className={classes.collectionBtnCommon}>
            <Button
              onClick={() =>
                window.open(
                  "https://opensea.io/Almighty_Crafters?tab=created"
                )
              }
            >
              SEE ALL COLLECTIONS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandmadeCollection;
