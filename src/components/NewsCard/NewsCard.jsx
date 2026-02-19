// src/components/NewsCard/NewsCard.jsx

import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({
  isLoggedIn,
  image,
  date,
  title,
  text,
  source,
  keyword,
  isSavedPage,
  isSearchResult,
}) {
  // 1. You need these defined to prevent the white screen crash!
  const [isMarked, setIsMarked] = useState(false);
  const handleBookmarkClick = () => {
    if (isLoggedIn) setIsMarked(!isMarked);
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        {/* ONLY show the keyword label if we are on the Saved News page */}
        {isSavedPage && keyword && (
          <p className="news-card__keyword">{keyword}</p>
        )}

        <img src={image} alt={title} className="news-card__image" />

        <button
          className={`news-card__bookmark-button ${isMarked ? "news-card__bookmark-button_marked" : ""}`}
          type="button"
          onClick={handleBookmarkClick}
        />

        {!isLoggedIn && (
          <div className="news-card__tooltip">Sign in to save articles</div>
        )}

        {isLoggedIn && isSavedPage && (
          <div className="news-card__tooltip">Remove from saved</div>
        )}
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{date}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;
