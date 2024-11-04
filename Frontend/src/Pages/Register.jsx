import React, { useState } from "react";
import Form from "../components/Form";
import styles from "./Register.module.css";
import Logo from "../assets/Logo.png"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const formFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter your name",
      value: formData.name,
      onChange: (e) => {
        setFormData({ ...formData, name: e.target.value });
        setError((error) => ({ ...error, name: false }));
      },
    },
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
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password",
      value: formData.confirmPassword,
      onChange: (e) => {
        setFormData({ ...formData, confirmPassword: e.target.value });
        setError((error) => ({ ...error, confirmPassword: false }));
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
      console.log("Form submitted successfully!", formData);
    }
  };

  const errorMessages = {
    name: {
      message: "Name is required",
      isValid: formData.name.length > 0,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
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
    confirmPassword: {
      message: "Passwords do not match",
      isValid: formData.confirmPassword === formData.password,
      onError: () => {
        setError((error) => ({ ...error, confirmPassword: true }));
      },
    },
  };

  return (
    <div className={styles.container}>
  <div className={styles.homepageArea}>
    <div className={styles.circle}>
      <img src={Logo} alt="Logo" />
    </div>
    <h2>Welcome aboard my friend</h2>
    <p>just a couple of clicks and we start</p>
  </div>

  <div className={styles.formArea}>
    <h1 className={styles.formTitle}>Register</h1>
    <div className={styles.formFields}>
      <Form
        error={error}
        formFields={formFields}
        onSubmit={onSubmit}
        errorMessages={errorMessages}
      />
      {/* Register button at the bottom */}
     
    </div>
  </div>
</div>

  );
}
