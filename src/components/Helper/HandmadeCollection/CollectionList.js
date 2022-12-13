import CollectionItem from './CollectionItem';
import classes from './CollectionList.module.css';
import React from 'react';
function CollectionList(props) {
  return (
    <ul className={classes.list}>
      {props.Collections.map((epics) => (
        <CollectionItem
          key={epics.id}
          id={epics.id}
          image={epics.image}
          // title={epics.title}
          address={epics.address}
        />
      ))}
    </ul>
  );
}

export default CollectionList;
