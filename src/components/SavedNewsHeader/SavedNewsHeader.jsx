// src/components/SavedNewsHeader/SavedNewsHeader.jsx

import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ username }) {
  return (
    <section className="saved-news-header">
      {/* This container MUST have flex-direction: column in CSS */}
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">
          {username}, you have 5 saved articles
        </h1>
        <p className="saved-news-header__keywords">
          By keywords: <span className="saved-news-header__keywords-bold">Nature, Yellowstone, and 2 other</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;