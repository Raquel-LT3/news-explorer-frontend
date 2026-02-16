import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  const location = useLocation();
 
  const isSavedNews = location.pathname === '/saved-news';

  return (
    <header className={`header ${isSavedNews ? 'header_theme_light' : ''}`}>
      <div className="header__container">
        <Link to="/" className={`header__logo ${isSavedNews ? 'header__logo_theme_light' : ''}`}>
          NewsExplorer
        </Link>
        <Navigation isSavedNews={isSavedNews} />
      </div>
    </header>
  );
}

export default Header;