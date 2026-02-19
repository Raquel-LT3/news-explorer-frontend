// src/components/Header/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

// 1. Add the props here so Header can receive them from App.jsx
function Header({
isLoggedIn,
  onSignInClick,
  username,
  onLogout,
  isMenuOpen,
  setIsMenuOpen,
  isLoginPopupOpen,    
  isRegisterPopupOpen,
}) {
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`header ${isSavedNews ? "header_theme_light" : ""} ${
        isMenuOpen ? "header_menu-open" : ""
      }`}
    >
      <div className="header__container">
        <Link
          to="/"
          className={`header__logo ${
            isSavedNews ? "header__logo_theme_light" : ""
          }`}
        >
          NewsExplorer
        </Link>

        <button
          className={`header__menu-button 
    ${isSavedNews ? "header__menu-button_theme_light" : ""} 
    ${isMenuOpen ? "header__menu-button_type_close" : ""}
    ${isLoginPopupOpen || isRegisterPopupOpen ? "header__menu-button_hidden" : ""}`}
          type="button"
          onClick={toggleMenu}
        />

        {/* 2. Pass the props down to Navigation */}
        <Navigation
          isSavedNews={isSavedNews}
          isMenuOpen={isMenuOpen}
          isLoggedIn={isLoggedIn}
          onSignInClick={onSignInClick}
          onLogout={onLogout}
          username={username} // Added this missing prop!
        />
      </div>
    </header>
  );
}

export default Header;
