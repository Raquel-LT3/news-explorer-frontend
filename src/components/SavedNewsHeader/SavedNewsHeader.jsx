// src/components/SavedNewsHeader/SavedNewsHeader.jsx

import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <section className="saved-news-header">
      <p className="saved-news-header__subtitle">Saved articles</p>
      <h1 className="saved-news-header__title">Elise, you have 5 saved articles</h1>
      <p className="saved-news-header__keywords">
        By keywords: <span className="saved-news-header__keywords-bold">Nature, Yellowstone, and 2 other</span>
      </p>
    </section>
  );
}

export default SavedNewsHeader;