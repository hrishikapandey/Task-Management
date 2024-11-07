import React, { useState } from "react";
import Form from "../components/Form";
import styles from "./Login.module.css";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();  // Define navigate using useNavigate

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const formFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      value: formData.email,
      onChange: (e) => {
        setFormData({ ...formData, email: e.target.value });
        setError((error) => ({ ...error, email: false }));
      },
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      value: formData.password,
      onChange: (e) => {
        setFormData({ ...formData, password: e.target.value });
        setError((error) => ({ ...error, password: false }));
      },
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;
    Object.keys(errorMessages).forEach((key) => {
      if (!errorMessages[key].isValid) {
        errorMessages[key].onError();
        formIsValid = false;
      }
    });

    if (formIsValid) {
      console.log("Login successful!", formData);
    }
  };

  const errorMessages = {
    email: {
      message: "Email is required",
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
    password: {
      message: "Password is required",
      isValid: formData.password.length > 0,
      onError: () => {
        setError((error) => ({ ...error, password: true }));
      },
    },
  };

  const goToRegister = () => {
    navigate("/register");  // Use navigate to go to the Register page
  };

  return (
    <div className={styles.container}>
      <div className={styles.homepageArea}>
        <div className={styles.circle}>
          <img src={Logo} alt="Logo" />
        </div>
        <h2>Welcome aboard my friend</h2>
        <p>Just a couple of clicks and we start</p>
      </div>

      <div className={styles.formArea}>
        <h1 className={styles.formTitle}>Login</h1>
        <div className={styles.formFields}>
          <Form
            error={error}
            formFields={formFields}
            onSubmit={onSubmit}
            errorMessages={errorMessages}
            buttonLabel="Login"
          />
          <p>Have no account yet?</p>
          <button className={styles.registerButton} onClick={goToRegister}>Register</button>
        </div>
      </div>
    </div>
  );
}
