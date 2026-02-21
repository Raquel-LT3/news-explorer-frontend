// src/components/RegisterPopup/RegisterPopup.jsx

import React, { useState, useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

/**
 * RegisterPopup component for new user registration
 */
function RegisterPopup({ isOpen, onClose, onSignInClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [serverError, setServerError] = useState("");

  // Reset errors when the popup opens/closes
  useEffect(() => {
    setServerError("");
  }, [isOpen]);

  const isValid = 
    email.includes("@") && 
    password.length > 5 && 
    username.length > 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // Logic for handling registration is passed to the parent handler
      onRegister(email, password, username, setServerError);
    }
  };

  return (
    <PopupWithForm
      name="sign-up"
      title="Sign up"
      buttonText="Sign up"
      isOpen={isOpen}
      onClose={onClose}
      onLinkClick={onSignInClick}
      linkText="Sign in"
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input"
        placeholder="Enter email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <span className="popup__error">
        {email && !email.includes("@") ? "Invalid email address" : ""}
      </span>

      <label className="popup__label">Password</label>
      <input
        className="popup__input"
        placeholder="Enter password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <span className="popup__error">
        {password && password.length <= 5 ? "Password is too short" : ""}
      </span>

      <label className="popup__label">Username</label>
      <input
        className="popup__input"
        placeholder="Enter your username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <span className="popup__error">
        {username && username.length <= 1 ? "Username is too short" : ""}
      </span>

      <span className="popup__error popup__error_type_server">
        {serverError}
      </span>
    </PopupWithForm>
  );
}

export default RegisterPopup;