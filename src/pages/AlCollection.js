import React from "react";
import Button from "../components/Button/Button";
import classes from "./AlCollection.module.css";
import Collection from "../components/Helper/AlCollection/Collection";
const Alcollection = () => {
  return (
    <div className={classes.collection}>
      <div className={classes.title}>
        <h3>Our Al Collection</h3>
      </div>
      <Collection />
      <div className={classes.btnDescription}>
        <div className={classes.Totaldescription}>
          <div className={classes.description}>
            <p>
              Our AI based collections are made with help of technology. We
              think that imagination plays a major role in making arts. AI helps
              to convert those thoughts into mind-blowing digital art forms.
              Output of these AI, you can see, are really spectacular. They may
              not be handmade but still are worth exploring as well as owning.
            </p>
          </div>
          <div className={classes.collectionBtnCommon}>
            <Button
              onClick={() =>
                window.open("https://opensea.io/Almighty_Crafters?tab=created")
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

export default Alcollection;
