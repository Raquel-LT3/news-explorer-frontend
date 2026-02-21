// src/components/SavedNewsHeader/SavedNewsHeader.jsx

import React from 'react';
import './SavedNewsHeader.css';

/**
 * SavedNewsHeader component displays the count and keywords 
 * for the user's saved articles.
 */
function SavedNewsHeader({ username, savedArticles = [] }) {
  const count = savedArticles.length;

  // Process keywords to display unique values and handle overflow
  const keywords = savedArticles.map((art) => art.keyword);
  const uniqueKeywords = [...new Set(keywords)]; 
  
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
            {displayKeywords}
          </span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;