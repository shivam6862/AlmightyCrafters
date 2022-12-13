import { useState, useEffect } from "react";
import React from "react";

import LoadingSpinner from "../../UI/LoadingSpinner";
import CollectionList from "./CollectionList";
import classes from "./Collection.module.css";
const Collection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCollections1, setLoadedCollections1] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://almightycrafters-c8b55-default-rtdb.firebaseio.com//Collection.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const Collections = [];

        for (const key in data) {
          const Collection = {
            id: key,
            ...data[key],
          };

          Collections.push(Collection);
        }

        setIsLoading(false);
        setLoadedCollections1(Collections);
      });
  }, []);

  const [loadedCollections2, setLoadedCollections2] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://almightycrafters-c8b55-default-rtdb.firebaseio.com//Collection2.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const Collections = [];

        for (const key in data) {
          const Collection = {
            id: key,
            ...data[key],
          };

          Collections.push(Collection);
        }

        setIsLoading(false);
        setLoadedCollections2(Collections);
      });
  }, []);

  if (isLoading) {
    return (
      <div className={classes.loadingspinner}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className={classes.images}>
      <div className={classes.imagetop}>
        <CollectionList Collections={loadedCollections1} />
      </div>
      <div className={classes.imagebottom}>
        <CollectionList Collections={loadedCollections2} />
      </div>
    </div>
  );
};

export default Collection;
