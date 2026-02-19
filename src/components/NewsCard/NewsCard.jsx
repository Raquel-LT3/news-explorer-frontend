// src/components/NewsCard/NewsCard.jsx

import React from "react";
import "./NewsCard.css";

function NewsCard({
  article,       // Pass the whole article object
  isLoggedIn,
  onSave,        // Function from App.jsx
  onDelete,      // Function from App.jsx
  savedArticles, // Array from App.jsx
  isSavedPage,
  // Keep your existing UI props if you prefer mapping them individually:
  image, date, title, text, source, keyword 
}) {
  
  // Check if this specific article is already saved by comparing URLs
  // This ensures the blue icon stays blue even after a page switch
  const isSaved = savedArticles?.some((item) => item.url === (article?.url || image));

  const handleButtonClick = () => {
    if (!isLoggedIn) return;

    if (isSavedPage) {
      // On the Saved News page, the button should delete
      onDelete(article._id || article.url);
    } else if (isSaved) {
      // If already saved, clicking again should probably delete it 
      // (Optional logic, but common for bookmarks)
      onDelete(article.url);
    } else {
      // Otherwise, save it!
      onSave(article);
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
          className={`news-card__bookmark-button 
            ${isSavedPage ? "news-card__delete-button" : ""} 
            ${isSaved ? "news-card__bookmark-button_marked" : ""}`}
          type="button"
          onClick={handleButtonClick}
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