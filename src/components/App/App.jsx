// src/components/App/App.jsx

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

// API Imports
import * as api from "../../utils/api";
import * as newsApi from "../../utils/NewsApi";

// Component Imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../PreLoader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SavedNews from "../SavedNews/SavedNews";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function App() {
  const navigate = useNavigate();

  /* --- State Variables --- */
  const [savedArticles, setSavedArticles] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [activeKeyword, setActiveKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isServerError, setIsServerError] = useState(false);

  /* --- Article Handlers (Simulated for Sprint 3) --- */

  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleSignInClick();
      return;
    }

    // Simulate backend response by adding to local state
    const savedItem = { 
      ...article, 
      _id: Math.random().toString(36).substr(2, 9), 
      keyword: activeKeyword 
    };
    
    setSavedArticles([savedItem, ...savedArticles]);
  };

  const handleDeleteArticle = (articleIdentifier) => {
    // Simulate backend deletion by filtering local state
    setSavedArticles((state) =>
      state.filter(
        (item) =>
          item._id !== articleIdentifier && item.url !== articleIdentifier,
      ),
    );
  };

  /* --- News API Handler --- */
  const handleSearchSubmit = (keyword) => {
    // Validation: Prevent search if keyword is empty or whitespace
    if (!keyword || keyword.trim().length === 0) {
      return; 
    }

    setActiveKeyword(keyword);
    setShowResults(false);
    setIsNotFound(false);
    setIsServerError(false);
    setIsLoading(true);

    newsApi
      .getNews(keyword)
      .then((data) => {
        if (data.articles.length === 0) {
          setIsNotFound(true);
        } else {
          setSearchResults(data.articles);
          setShowResults(true);
        }
      })
      .catch((err) => {
        setIsServerError(true);
        // Errors are kept for debugging during development, 
        // but typically minimized for production
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  /* --- Popup & Auth Handlers (Simulated) --- */
  const handleSignInClick = () => {
    closeAllPopups();
    setIsLoginPopupOpen(true);
    setIsMenuOpen(false);
  };

  const handleSignUpClick = () => {
    closeAllPopups();
    setIsRegisterPopupOpen(true);
    setIsMenuOpen(false);
  };

  const closeAllPopups = () => {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  const handleLogin = (email, password, username) => {
    const nameToUse = username || "Raquel";
    setCurrentUser(nameToUse);
    setIsLoggedIn(true);
    closeAllPopups();
  };

  const handleRegisterSubmit = (email, password, username) => {
    setCurrentUser(username || "New User");
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    navigate("/");
  };

  return (
    <div className="page">
      <Header
        isLoggedIn={isLoggedIn}
        onSignInClick={handleSignInClick}
        username={currentUser}
        onLogout={handleLogout}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isLoginPopupOpen={isLoginPopupOpen}
        isRegisterPopupOpen={isRegisterPopupOpen}
      />

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main onSearch={handleSearchSubmit} />

                {isLoading && <Preloader />}

                {showResults && (
                  <NewsCardList
                    key={activeKeyword}
                    isLoggedIn={isLoggedIn}
                    onSave={handleSaveArticle}
                    onDelete={handleDeleteArticle}
                    savedArticles={savedArticles}
                    articles={searchResults}
                    keyword={activeKeyword}
                  />
                )}

                {isNotFound && <NothingFound />}

                {isServerError && (
                  <p className="news-card-list__error">
                    Sorry, something went wrong during the request. Please try
                    again later.
                  </p>
                )}

                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={
              <SavedNews
                username={currentUser}
                savedArticles={savedArticles}
                onDelete={handleDeleteArticle}
              />
            }
          />
        </Routes>
      </main>

      <Footer />

      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        onSignUpClick={handleSignUpClick}
        onLogin={handleLogin}
      />

      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        onSignInClick={handleSignInClick}
        onRegister={handleRegisterSubmit}
      />

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;