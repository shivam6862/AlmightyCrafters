import { useRef } from "react";
import React from "react";
import Card from "../../UI/Card";
import Button from "../../Button/Button";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  const nameInputRef = useRef();
  const phonenumberInputRef = useRef();
  const emailInputRef = useRef();
  const publicKeyInputRef = useRef();
  const typeofFilesInputRef = useRef();
  const nameYourCollectionInputRef = useRef();
  const uploadFilesInputRef = useRef();
  const profilePictureInputRef = useRef();
  const socialMediaProfilesInputRef = useRef();
  const priceOfYourProductInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhonenumber = phonenumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPublicKey = publicKeyInputRef.current.value;
    const enteredTypeofFiles = typeofFilesInputRef.current.value;
    const enteredNameYourCollection = nameYourCollectionInputRef.current.value;
    const enteredUploadFiles = uploadFilesInputRef.current.value;
    const enteredProfilePicture = profilePictureInputRef.current.value;
    const enteredSocialMediaProfiles =
      socialMediaProfilesInputRef.current.value;
    const enteredPriceOfYourProduct = priceOfYourProductInputRef.current.value;

    const registerformData = {
      Name: enteredName,
      PhoneNumber: enteredPhonenumber,
      Email: enteredEmail,
      PublicKey: enteredPublicKey,
      TypeofFiles: enteredTypeofFiles,
      NameYourCollection: enteredNameYourCollection,
      UploadFiles: enteredUploadFiles,
      ProfilePicture: enteredProfilePicture,
      socialMediaProfiles: enteredSocialMediaProfiles,
      priceOfYourProduct: enteredPriceOfYourProduct,
    };

    props.onAddRegisterform(registerformData);
  }
  return (
    <div>
      <Card>
        <div className={classes.heading}>Contact information</div>
        <div className={classes.note}>
          Almighty Crafters NFTs files upload form
          <br />
          <span>
            <a href="https://docs.google.com/document/d/1-4pybYy1nnj_K9ShDyCwbXg5Wl-N2y01-mJ7S8MU8tM/edit">
              *terms and condition
            </a>
          </span>
        </div>
      </Card>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="name">
              1. Name <spam className={classes.star}>*</spam>
            </label>
            <input type="text" required id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="number">
              2. Phone number <spam className={classes.star}>*</spam>
            </label>
            <input
              type="text"
              required
              id="phonenumber"
              ref={phonenumberInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="Email">
              3. Email <spam className={classes.star}>*</spam>
            </label>
            <input type="email" required id="Email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="PublicKey">
              <div className={classes.key}>
                4. Enter your crypto wallet public key-
              </div>
              It takes just 2 mins to make wallet just install its extension.
              Your collection would be transferred to this account.{" "}
              <spam className={classes.star}>*</spam>
            </label>
            <textarea
              id="PublicKey"
              required
              rows="1"
              ref={publicKeyInputRef}
            ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="checkbox">
              5. Type of Files <spam className={classes.star}>*</spam>
            </label>
            <ul>
              <li>Images</li>
              <li>Viedos</li>
              <li>Music</li>
              <li>Others</li>
            </ul>
            <input
              type="text"
              required
              id="TypeofFiles"
              ref={typeofFilesInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">
              6. Name Your Collection <spam className={classes.star}>*</spam>
            </label>
            <input
              type="text"
              required
              id="NameYourCollection"
              ref={nameYourCollectionInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">
              7. Link of your Files <spam className={classes.star}>*</spam>
            </label>
            <input
              type="url"
              required
              id="UploadFiles"
              ref={uploadFilesInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">
              8. Link of your profile picture to be shown in your collection{" "}
              <spam className={classes.star}>*</spam>
            </label>
            <input
              type="url"
              required
              id="profilePicture"
              ref={profilePictureInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">
              9. you can give link to your social media profiles to be linked to
              your collections. ( Instagram and twitter only)
            </label>
            <input
              type="url"
              id="socialMediaProfiles"
              ref={socialMediaProfilesInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">
              10.Enter the Price at which you want to sell your whole collection
              (all files) in ETH* ( keep it &lt; 0.1) 0.005 ETH* will be charged
              as fees only when you NFTs collection is SOLD. You can check ETH
              price in rupees{" "}
              <a href="https://www.coinbase.com/converter/eth/inr"> Here</a>{" "}
              <spam className={classes.star}>*</spam>
            </label>
            <input
              type="number"
              required
              id="priceOfYourProduct"
              min="0"
              step="any"
              ref={priceOfYourProductInputRef}
            />
          </div>
          <div className={classes.actions}>
            <div className={classes.button}>
              <Button>Submit</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
