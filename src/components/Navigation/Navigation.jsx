// src/components/Navigation/Navigation.jsx

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logoutWhite from "../../images/logout.svg";

/**
 * Navigation component for header links and user actions
 */
function Navigation({
  isSavedNews,
  isMenuOpen,
  isLoggedIn,
  onSignInClick,
  username,
  onLogout,
}) {
  const linkThemeClass = isSavedNews ? "navigation__link_theme_light" : "";
  const buttonThemeClass = isSavedNews ? "navigation__button_theme_light" : "";
  const iconThemeClass = isSavedNews ? "navigation__logout-icon_theme_light" : "";

  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_visible" : ""}`}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `navigation__link ${linkThemeClass} ${isActive ? "navigation__link_active" : ""}`
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/saved-news"
          className={({ isActive }) =>
            `navigation__link ${linkThemeClass} ${isActive ? "navigation__link_active" : ""}`
          }
        >
          Saved articles
        </NavLink>
      )}

      <button
        className={`navigation__button ${buttonThemeClass}`}
        type="button"
        onClick={isLoggedIn ? onLogout : onSignInClick}
      >
        <span className="navigation__username">
          {isLoggedIn ? (username || "User") : "Sign in"}
        </span>

        {isLoggedIn && (
          <img
            src={logoutWhite}
            alt="Logout"
            className={`navigation__logout-icon ${iconThemeClass}`}
          />
        )}
      </button>
    </nav>
  );
}

export default Navigation;