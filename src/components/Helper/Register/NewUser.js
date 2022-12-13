import { useHistory } from "react-router-dom";
import React from "react";
import RegisterForm from "./RegisterForm";

function NewUserPage() {
  const history = useHistory();

  function addFormHandler(formData) {
    fetch("https://almightycrafters-c8b55-default-rtdb.firebaseio.com/RegisterForm.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          letterSpacing: "1.4px",
          fontFamily: "Vazir",
          color: "white",
          textAlign:"center",
        }}
      >
        Registration Form
      </h1>
      <RegisterForm onAddRegisterform={addFormHandler} />
    </section>
  );
}

export default NewUserPage;
