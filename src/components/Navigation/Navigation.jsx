// src/components/Navigation/Navigation.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({ isSavedNews }) {
  // We will eventually get this from a Context or prop
  const isLoggedIn = false; 

  return (
    <nav className="navigation">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `navigation__link ${isSavedNews ? 'navigation__link_theme_light' : ''} ${isActive ? 'navigation__link_active' : ''}`
        }
      >
        Home
      </NavLink>
      
      {isLoggedIn && (
        <NavLink 
          to="/saved-news" 
          className={({ isActive }) => 
            `navigation__link ${isSavedNews ? 'navigation__link_theme_light' : ''} ${isActive ? 'navigation__link_active' : ''}`
          }
        >
          Saved articles
        </NavLink>
      )}

      <button 
        className={`navigation__button ${isSavedNews ? 'navigation__button_theme_light' : ''}`}
        type="button"
      >
        {isLoggedIn ? 'UserName' : 'Sign in'}
        {isLoggedIn && <span className="navigation__logout-icon"></span>}
      </button>
    </nav>
  );
}

export default Navigation;