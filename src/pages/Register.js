import { useHistory } from "react-router-dom";
import React from "react";
import classes from "./Register.module.css";
import Button from "../components/Button/Button";
const Register = () => {
  const history = useHistory();
  return (
    <div className={classes.register}>
      <div className={classes.left}>
        <div className={classes.leftcontent}>
          <div className={classes.title}>
            <h3>Register</h3>
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
                Everyone has different interests in life. Some like to make
                music, some make art, some make videos, etc. So why not make
                NFTs of them and be its proud owner.
              </p>
              <p>
                Yes, now you can convert any of these art forms to NFTs and own
                it or EARN from them. NFTs are digital commodity. We will
                convert your art forms to NFTs and make you its owner for FREE.
                <br></br>
                Just click on button below.
              </p>
            </div>
            <div className={classes.registerBtnCommon}>
              <Button onClick={() => history.replace("/registerForm")}>
                Register Now
              </Button>
            </div>
            <p>
              WE ALSO CRAFT NFTs FOR YOU. So if you want to turn your family
              into digital art or want NFTs of your product just drop us an
              EMAIL at almightycrafters@gmail.com and we will enjoy making them
              for you.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.process}>
          <ul>
            <li>
              <div className={classes.pitem}>
                <div className={classes.iteminside}>
                  <h3 className={classes.data}>01</h3>
                  <p>Collect your content</p>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.pitem}>
                <div className={classes.iteminside}>
                  <h3 className={classes.data}>02</h3>
                  <p>Send it to us</p>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.pitem}>
                <div className={classes.iteminside}>
                  <h3 className={classes.data}>03</h3>
                  <p>Sale will be listed</p>
                </div>
              </div>
            </li>
            <li>
              <div className={classes.pitem}>
                <div className={classes.iteminside}>
                  <h3 className={classes.data}>04</h3>
                  <p>You will recieve sale amount</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Register;
