// src/components/Main/Main.jsx

import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Main.css';

/**
 * Main component representing the Hero section
 * @param {function} onSearch - Handler for processing search input
 */
function Main({ onSearch }) {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal account.
        </p>
        
        <SearchForm onSearch={onSearch} />
      </div>
    </section>
  );
}

export default Main;