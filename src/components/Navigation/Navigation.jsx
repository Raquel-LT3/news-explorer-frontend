// src/components/Navigation/Navigation.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhite from "../../images/logout.svg";

// 1. Add isLoggedIn and onSignInClick to the props
function Navigation({
  isSavedNews,
  isMenuOpen,
  isLoggedIn,
  onSignInClick,
  username,
  onLogout,
}) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_visible" : ""}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `navigation__link ${isSavedNews ? "navigation__link_theme_light" : ""} ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            `navigation__link ${isSavedNews ? "navigation__link_theme_light" : ""} ${isActive ? "navigation__link_active" : ""}`
          }
        >
          Saved articles
        </NavLink>
      )}

      <button
        className={`navigation__button ${isSavedNews ? "navigation__button_theme_light" : ""}`}
        type="button"
        onClick={isLoggedIn ? onLogout : onSignInClick}
      >
        {/* If logged in, show username (fallback to Elise). If not, show Sign in */}
        <span className="navigation__username">
          {isLoggedIn ? (username || "Elise") : "Sign in"}
        </span>

        {isLoggedIn && (
          <img
            src={logoutWhite}
            alt="Logout"
            className={`navigation__logout-icon ${isSavedNews ? "navigation__logout-icon_theme_light" : ""}`}
          />
        )}
      </button>
    </nav>
  );
}

export default Navigation;
