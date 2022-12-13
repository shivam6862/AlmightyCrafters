import React from "react";
import Button from "../components/Button/Button";
import classes from "./Aim.module.css";
const Aim = () => {
  return (
    <div className={classes.aim}>
      <div className={classes.left}>
        <img
          className={classes.backgroundimage}
          src="./pictures/background.webp"
          alt="backgroundImage"
        ></img>
        <div className={classes.logo}>
          <img src="./pictures/logo.jpg" alt="logo"></img>
        </div>
      </div>

      <div className={classes.right}>
        <div className={classes.rightcontent}>
          <div className={classes.title}>
            <h3>Our Aim</h3>
          </div>
          <span className={classes.line}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="300px"
              height="40px"
              viewBox="0 0 300 40"
              preserveAspectRatio="xMidYMid meet"
            >
              <g stroke="none">
                <line
                  x1="30"
                  y1="20"
                  x2="130"
                  y2="20"
                  stroke="white"
                  strokeWidth="1"
                ></line>
              </g>
            </svg>
          </span>
          <div className={classes.description}>
            <div className={classes.information}>
              <p>
                Almighty Crafters was started with aim of making good quality
                digital arts and selling them to interested peeps in the form of
                NFTs which will make them sole owner of property.
              </p>
              <p>
                But soon we realised that this opportunity of creating
                Non-Fungible Tokens for one's art form has not been exploited
                much by people. Main reason being lack of knowledge of terms
                like Blockchain, Web3, Crypto, etc.
              </p>
              <p>
                Thus we decided to help people forming there NFTs and
                registering them. You can send any form of content be it photos,
                art, music, video, or anything and we will form your NFTs
                registered in our platform. And the most important thing, we
                will do it for FREE. You can then put your NFTS for sale and
                earn money through it.
              </p>
              <p>
                So don't wait, turn whatever you want to NFTs earn from it by
                selling them.
              </p>
            </div>
            <div className={classes.discordBtnCommon}>
              <Button
                onClick={() =>
                  window.open(
                    "https://opensea.io/Almighty_Crafters?search[sortBy]=LAST_SALE_PRICE&search[toggles][0]=BUY_NOW"
                  )
                }
              >
                FIND US ON DISCORD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aim;
