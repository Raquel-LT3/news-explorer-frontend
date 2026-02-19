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
      buttonText="" // Empty string so the button hides
      linkText="Sign in"
      onLinkClick={onSignInClick}
      isValid={true}
    >
      {/* No inputs needed here per Figma */}
    </PopupWithForm>
  );
}

export default InfoTooltip;