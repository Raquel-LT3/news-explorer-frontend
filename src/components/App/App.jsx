// src/components/App/App.jsx

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip"; // Make sure to create this file!
import Preloader from "../PreLoader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SavedNews from "../SavedNews/SavedNews";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  const handleSearchSubmit = (topic) => {
    setShowResults(false);
    setIsNotFound(false);
    setIsLoading(true);
    setTimeout(() => {
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
    // If currentUser is empty (no registration happened), use "Elise"
    const nameToUse = currentUser || "Elise";
    setCurrentUser(nameToUse);
    setIsLoggedIn(true);
    closeAllPopups();
    console.log("Logged in successfully!");
  };

  const handleRegisterSubmit = (email, password, username) => {
    // Save the username so it's ready when they log in later
    setCurrentUser(username);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(true);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser("");
    navigate("/"); // Redirect to home on logout
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
                {showResults && <NewsCardList isLoggedIn={isLoggedIn} />}
                {isNotFound && <NothingFound />}
                <About />
              </>
            }
          />
          <Route
            path="/saved-news"
            element={<SavedNews username={currentUser} />}
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
        onRegister={handleRegisterSubmit} // Pass the submit handler
      />

      {/* Success Popup */}
      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        onClose={closeAllPopups}
        onSignInClick={handleSignInClick}
      />
    </div>
  );
}

export default App;
