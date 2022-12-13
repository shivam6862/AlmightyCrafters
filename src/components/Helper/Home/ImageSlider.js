import { useState, useEffect } from "react";
import React from "react";

import classes from "./ImageSlider.module.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);
  const [nextIndex, setNextIndex] = useState(1);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    // PREVIOUS INDEX
    if (newIndex === 0) {
      const pre = slides.length - 1;
      setPrevIndex(pre);
    } else {
      const pre = newIndex - 1;
      setPrevIndex(pre);
    }

    // next index
    if (newIndex === slides.length - 1) {
      const nex = 0;
      setNextIndex(nex);
    } else {
      const nex = newIndex + 1;
      setNextIndex(nex);
    }

    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    // PREVIOUS INDEX
    if (newIndex === 0) {
      const pre = slides.length - 1;
      setPrevIndex(pre);
    } else {
      const pre = newIndex - 1;
      setPrevIndex(pre);
    }

    // next index
    if (newIndex === slides.length - 1) {
      const nex = 0;
      setNextIndex(nex);
    } else {
      const nex = newIndex + 1;
      setNextIndex(nex);
    }

    setCurrentIndex(newIndex);
  };

  const sliderImagesMover = {
    image: slides[currentIndex].image,
    prev: slides[prevIndex].image,
    next: slides[nextIndex].image,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className={classes.mainthreeimage}>
        <div className={classes.threeimage}>
          <div className={classes.previousimage}>
            <a href={slides[prevIndex].address} className={classes.imagelike}>
              <img src={sliderImagesMover.prev} alt={slides.title} />
            </a>
          </div>
          <div className={classes.currentimage}>
            <a
              href={slides[currentIndex].address}
              className={classes.imagelike}
            >
              <img src={sliderImagesMover.image} alt={slides.title} />
            </a>
          </div>
          <div className={classes.nextimage}>
            <a href={slides[nextIndex].address} className={classes.imagelike}>
              <img src={sliderImagesMover.next} alt={slides.title} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.buttonbar}>
        <div className={classes.circle}>&#9680;</div>
        <div onClick={goToPrevious} className={classes.leftArrowStyles}>
          ❰
        </div>
        <div className={classes.circle}>&#9678;</div>
        <div>
          <span className={classes.line}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="80px"
              height="40px"
              viewBox="0 0 80 40"
              preserveAspectRatio="xMidYMid meet"
            >
              <g stroke="none">
                <line
                  x1="1"
                  y1="20"
                  x2="100"
                  y2="20"
                  stroke="white"
                  strokeWidth="2.2"
                ></line>
              </g>
            </svg>
          </span>
        </div>
        <div className={classes.circle}>&#9678;</div>
        <div onClick={goToNext} className={classes.rightArrowStyles}>
          ❱
        </div>
        <div className={classes.circle}>&#9681;</div>
      </div>
    </div>
  );
};

export default ImageSlider;
