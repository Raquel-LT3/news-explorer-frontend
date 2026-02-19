// src/components/SavedNewsHeader/SavedNewsHeader.jsx

import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader({ username, savedArticles = [] }) {
  const count = savedArticles.length;

  // --- Logic for Dynamic Keywords ---
  // 1. Create an array of just the keywords
  const keywords = savedArticles.map((art) => art.keyword);
  
  // 2. Remove duplicates
  const uniqueKeywords = [...new Set(keywords)]; 
  
  // 3. Format the display string (e.g., "Nature, Parks, and 1 other")
  const displayKeywords = uniqueKeywords.length <= 3 
    ? uniqueKeywords.join(', ') 
    : `${uniqueKeywords.slice(0, 2).join(', ')}, and ${uniqueKeywords.length - 2} other`;

  return (
    <section className="saved-news-header">
      <div className="saved-news-header__container">
        <p className="saved-news-header__subtitle">Saved articles</p>
        <h1 className="saved-news-header__title">
          {username}, you have {count} saved articles
        </h1>
        <p className="saved-news-header__keywords">
          By keywords:{" "}
          <span className="saved-news-header__keywords-bold">
            {/* 4. Use the dynamic variable here */}
            {displayKeywords}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;