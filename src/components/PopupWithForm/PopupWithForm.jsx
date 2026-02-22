// src/components/PopupWithForm/PopupWithForm.jsx
import React, { useEffect } from "react";
import "./PopupWithForm.css";

/**
 * Reusable Popup component with form handling and accessibility features
 */
function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  buttonText,
  onLinkClick,
  linkText,
  isValid,
  onSubmit,
}) {
  // Handle Escape key closure
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscClose = (e) => {
      if (e.key === "Escape") onClose();
    };
    
    document.addEventListener("keydown", handleEscClose);
    return () => document.removeEventListener("keydown", handleEscClose);
  }, [isOpen, onClose]);

  // Handle clicking outside the popup container
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        <button
          className="popup__close-button"
          type="button"
          aria-label="Close popup"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        
        <form
          className="popup__form"
          name={name}
          onSubmit={onSubmit}
          noValidate
        >
          {children}

          {buttonText && (
            <button
              className={`popup__submit-button ${!isValid ? "popup__submit-button_disabled" : ""}`}
              type="submit"
              disabled={!isValid}
            >
              {buttonText}
            </button>
          )}
        </form>

        {linkText && (
          <p className={`popup__footer popup__footer_type_${name}`}>
            {name !== "success" && "or "}
            <span className="popup__link" onClick={onLinkClick}>
              {linkText}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default PopupWithForm;