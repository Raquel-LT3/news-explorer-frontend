// src/components/InfoTooltip/InfoTooltip.jsx
import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function InfoTooltip({ isOpen, onClose, onSignInClick }) {
  return (
    <PopupWithForm
      name="success"
      title="Registration successfully completed!"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="" // Empty string hides the primary action button for this variant
      linkText="Sign in"
      onLinkClick={onSignInClick}
      isValid={true}
    >
      {/* This variant of the popup serves as a notification 
          and does not require input fields. 
      */}
    </PopupWithForm>
  );
}

export default InfoTooltip;