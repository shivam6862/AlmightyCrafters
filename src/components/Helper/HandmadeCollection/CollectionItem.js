import React from "react";

import classes from "./CollectionItem.module.css";

function CollectionItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <a href={props.address}>
          <img src={props.image} alt={props.title} />
        </a>
      </div>
      {/* <div className={classes.content}>
        <h3>{props.title}</h3>
      </div> */}
    </li>
  );
}

export default CollectionItem;
