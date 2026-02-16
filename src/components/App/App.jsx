// src/components/App/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';



function App() {
  return (
    <div className="page">
      <Header /> 
      <main className="content">
        <Routes>
          <Route path="/" element={
            <>
              <Main />
              <About />
            </>
          } />
          <Route path="/saved-news" element={<SavedNews />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;