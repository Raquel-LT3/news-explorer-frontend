// src/components/NewsCard/NewsCard.jsx


import React, { useState } from 'react'; 
import './NewsCard.css';

function NewsCard({ isLoggedIn, image, date, title, text, source }) {
  const [isMarked, setIsMarked] = useState(false);

  const handleBookmarkClick = () => {
    // Figma logic: can only save/mark if logged in
    if (isLoggedIn) {
      setIsMarked(!isMarked);
    }
  };

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img src={image} alt={title} className="news-card__image" />
        
        <button 
          className={`news-card__bookmark-button ${isMarked ? 'news-card__bookmark-button_marked' : ''}`} 
          type="button" 
          onClick={handleBookmarkClick}
          aria-label="Save article" 
        />
        
        {/* Tooltip logic: only show if the user is not logged in */}
        {!isLoggedIn && (
          <div className="news-card__tooltip">Sign in to save articles</div>
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