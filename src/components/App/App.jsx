//src/components/App/App.jsx

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

  // Real API States
  const [searchResults, setSearchResults] = useState([]);
  const [isServerError, setIsServerError] = useState(false);

  /* --- API Handlers (Saving/Deleting) --- */
  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleSignInClick();
      return;
    }

    const articleToSave = { ...article, keyword: activeKeyword };

    api
      .saveArticle(articleToSave)
      .then((savedItem) => {
        setSavedArticles([savedItem, ...savedArticles]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (articleIdentifier) => {
    api
      .deleteArticle(articleIdentifier)
      .then(() => {
        setSavedArticles((state) =>
          state.filter(
            (item) =>
              item._id !== articleIdentifier && item.url !== articleIdentifier,
          ),
        );
      })
      .catch(console.error);
  };

  /* --- Real News API Handler --- */
  const handleSearchSubmit = (keyword) => {
    // 1. Requirement: Validation
    if (!keyword) {
      alert("Please enter a keyword"); // Simple validation for now
      return;
    }

    setActiveKeyword(keyword);

    // 2. Requirement: Show Preloader, Hide old results
    setShowResults(false);
    setIsNotFound(false);
    setIsServerError(false);
    setIsLoading(true);

    newsApi
      .getNews(keyword)
      .then((data) => {
        if (data.articles.length === 0) {
          // 3. Requirement: Show "Nothing Found"
          setIsNotFound(true);
        } else {
          // 4. Requirement: Save articles to state
          setSearchResults(data.articles);
          setShowResults(true);
        }
      })
      .catch((err) => {
        // 5. Requirement: Handle Server Error
        setIsServerError(true);
        console.error(err);
      })
      .finally(() => {
        // 6. Requirement: Remove Preloader
        setIsLoading(false);
      });
  };

  /* --- Popup & Auth Handlers --- */
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
    // If the form provides a username, use it; otherwise, use a fallback
    const nameToUse = username || "Raquel";
    setCurrentUser(nameToUse);
    setIsLoggedIn(true);
    closeAllPopups();
  };

  const handleRegisterSubmit = (email, password, username) => {
    setCurrentUser(username);
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
                    key={activeKeyword} // Add this! It resets the "Show More" count for every new search
                    isLoggedIn={isLoggedIn}
                    onSave={handleSaveArticle}
                    savedArticles={savedArticles}
                    articles={searchResults}
                    keyword={activeKeyword}
                  />
                )}

                {isNotFound && <NothingFound />}

                {/* Requirement: Show error message if API fails */}
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
                username={currentUser} // Pass the username to SavedNews
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
