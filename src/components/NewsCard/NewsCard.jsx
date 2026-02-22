// src/components/NewsCard/NewsCard.jsx

import React from "react";
import "./NewsCard.css";
import { formatDate } from "../../utils/dateUtils";

/**
 * NewsCard component for displaying individual article results
 */
function NewsCard({
  article,
  isLoggedIn,
  onSave,
  onDelete,
  savedArticles,
  isSavedPage,
  image,
  date,
  title,
  text,
  source,
  keyword,
}) {
  // Check if this article is already in the saved list
  const isSaved = savedArticles?.some(
    (item) => item.url === (article?.url || image),
  );

  const handleButtonClick = () => {
    if (!isLoggedIn) return;
    
    if (isSavedPage) {
      onDelete(article._id || article.url);
    } else {
      isSaved ? onDelete(article.url) : onSave(article);
    }
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        {isSavedPage && keyword && (
          <p className="news-card__keyword">{keyword}</p>
        )}

        <img src={image} alt={title} className="news-card__image" />

        <button
          className={`news-card__button 
            ${isSavedPage ? "news-card__button_type_delete" : "news-card__button_type_bookmark"} 
            ${!isSavedPage && isSaved ? "news-card__button_type_bookmark_marked" : ""}`}
          type="button"
          aria-label={isSavedPage ? "Delete article" : "Save article"}
          onClick={handleButtonClick}
        />

        <div className="news-card__tooltip">
          {!isLoggedIn
            ? "Sign in to save articles"
            : isSavedPage
              ? "Remove from saved"
              : ""}
        </div>
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{formatDate(date)}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__text">{text}</p>
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;