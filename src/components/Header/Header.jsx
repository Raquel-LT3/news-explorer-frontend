// src/components/Header/Header.jsx
import React, { useState } from "react"; // 1. Import useState
import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 2. Create the state
  const location = useLocation();
  const isSavedNews = location.pathname === "/saved-news";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // 3. Function to flip the state

return (
  <header className={`header ${isSavedNews ? "header_theme_light" : ""} ${isMenuOpen ? "header_menu-open" : ""}`}>
    <div className="header__container">
      <Link to="/" className={`header__logo ${isSavedNews ? "header__logo_theme_light" : ""}`}>
        NewsExplorer
      </Link>

      <button
        className={`header__menu-button ${isSavedNews ? "header__menu-button_theme_light" : ""} ${isMenuOpen ? "header__menu-button_type_close" : ""}`}
        type="button"
        onClick={toggleMenu}
      />

      {/* Put it back inside for Desktop flex spacing */}
      <Navigation isSavedNews={isSavedNews} isMenuOpen={isMenuOpen} />
    </div>
  </header>
  );
}

export default Header;
