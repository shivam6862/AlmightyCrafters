import { useState, useEffect } from "react";
import React from "react";

import LoadingSpinner from "../../UI/LoadingSpinner";
import ImageSlider from "./ImageSlider";
import classes from "./Photoslider.module.css";
const Photoslider = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSliders, setLoadedSliders] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://almightycrafters-c8b55-default-rtdb.firebaseio.com//Slider.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const Sliders = [];

        for (const key in data) {
          const Slider = {
            id: key,
            ...data[key],
          };

          Sliders.push(Slider);
        }

        setIsLoading(false);
        setLoadedSliders(Sliders);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <div className={classes.images}>
      <ImageSlider slides={loadedSliders} />
    </div>
  );
};

export default Photoslider;
