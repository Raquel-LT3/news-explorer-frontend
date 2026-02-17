// src/components/App/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Preloader from "../PreLoader/Preloader";
import NothingFound from "../NothingFound/NothingFound";
import SavedNews from "../SavedNews/SavedNews";
import NewsCardList from "../NewsCardList/NewsCardList";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const handleSearchSubmit = (topic) => {
    setShowResults(false);
    setIsNotFound(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      
      if (topic.toLowerCase() === 'nature') {
        setShowResults(true); 
      } else {
        setIsNotFound(true); // This sets the state to true for "houses"
      }
    }, 2000);
  };

  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} />

      <main className="content">
        <Routes>
          <Route path="/" element={
              <>
                <Main onSearch={handleSearchSubmit} />

                {/* 1. The Spinner */}
                {isLoading && <Preloader />}

                {/* 2. The Success Results */}
                {showResults && <NewsCardList isLoggedIn={isLoggedIn} />}

                {/* 3. The "Not Found" State - ADD THIS LINE BELOW */}
                {isNotFound && <NothingFound />}

                <About />
              </>
            }
          />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
} 

export default App;
