// src/components/LoginPopup/LoginPopup.jsx
import React, { useState } from "react"; // Ensure React is imported!
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function LoginPopup({ isOpen, onClose, onSignUpClick, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Simple validation logic for testing
  const isValid = email.includes("@") && password.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    
   if (isValid) {
      // 2. Call the function we passed down from App.jsx
      onLogin(email, password);
    }
  };

  return (
    <PopupWithForm
      name="sign-in"
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onLinkClick={onSignUpClick}
      linkText="Sign up"
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
      <span className="popup__error"></span>
    </PopupWithForm>
  );
}

export default LoginPopup;