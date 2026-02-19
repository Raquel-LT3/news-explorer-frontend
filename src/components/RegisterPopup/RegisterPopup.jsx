// src/components/RegisterPopup/RegisterPopup.jsx

import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function RegisterPopup({ isOpen, onClose, onSignInClick, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
  // This state will hold the "This email is not available" message
  const [serverError, setServerError] = useState(""); 

  const isValid = email.includes("@") && password.length > 5 && username.length > 2;

  const handleSubmit = (e) => {
    e.preventDefault();
    // For testing: if you type "test@test.com", show the error
    if (email === "test@test.com") {
      setServerError("This email is not available");
    } else {
      setServerError("");
      onRegister(email, password, username);
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
      <input className="popup__input" placeholder="Enter email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <span className="popup__error">{email && !email.includes("@") ? "Invalid email address" : ""}</span>

      <label className="popup__label">Password</label>
      <input className="popup__input" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <span className="popup__error"></span>

      <label className="popup__label">Username</label>
      <input className="popup__input" placeholder="Enter your username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <span className="popup__error"></span>

      {/* NEW: Server Error message placed right here */}
      <span className="popup__error popup__error_type_server">
        {serverError}
      </span>
    </PopupWithForm>
  );
}

export default RegisterPopup;