import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import * as api from "../../utils/api";

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

  /* --- API Handlers (Saving/Deleting) --- */
  const handleSaveArticle = (article) => {
    if (!isLoggedIn) {
      handleSignInClick();
      return;
    }
    api.saveArticle(article)
      .then((savedItem) => {
        setSavedArticles([savedItem, ...savedArticles]);
      })
      .catch(console.error);
  };

  const handleDeleteArticle = (articleId) => {
    api.deleteArticle(articleId)
      .then(() => {
        setSavedArticles((state) => 
          state.filter((item) => item._id !== articleId)
        );
      })
      .catch(console.error);
  };

  /* --- Popup & Auth Handlers --- */
  const handleSearchSubmit = (topic) => {
    setShowResults(false);
    setIsNotFound(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(true); // In reality, this will be your NewsAPI call
      setIsLoading(false);
      if (topic.toLowerCase() === "nature") {
        setShowResults(true);
      } else {
        setIsNotFound(true);
      }
    }, 2000);
  };

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

  const handleLogin = (email, password) => {
    const nameToUse = currentUser || "Elise";
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

  /* --- Final Render --- */
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
                    isLoggedIn={isLoggedIn} 
                    onSave={handleSaveArticle} 
                    savedArticles={savedArticles}
                  />
                )}
                {isNotFound && <NothingFound />}
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