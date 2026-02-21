// src/components/NewsCard/NewsCard.jsx

import React from "react";
import "./NewsCard.css";
import { formatDate } from "../../utils/dateUtils";

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

        {/* CORRECTION: Button and Tooltip are now adjacent so CSS '+' works */}
        <button
          className={`news-card__button 
            ${isSavedPage ? "news-card__button_type_delete" : "news-card__button_type_bookmark"} 
            ${!isSavedPage && isSaved ? "news-card__button_type_bookmark_marked" : ""}`}
          type="button"
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
        {/* The text will take up space, but not 'grow' */}
        <p className="news-card__text">{text}</p>
        {/* The source will be pushed to the bottom by CSS margin-top: auto */}
        <p className="news-card__source">{source}</p>
      </div>
    </article>
  );
}

export default NewsCard;