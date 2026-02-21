// src/components/NewsCardList/NewsCardList.jsx

import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';

/**
 * NewsCardList component handles the rendering of search results
 * with "Show More" pagination logic.
 */
function NewsCardList({ 
  isLoggedIn, 
  onSave, 
  onDelete, // Added for un-marking articles
  savedArticles, 
  articles = [], 
  keyword 
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      
      <div className="news-card-list__grid">
        {articles.slice(0, visibleCount).map((item, index) => (
          <NewsCard 
            key={index}
            article={item} 
            isLoggedIn={isLoggedIn}
            onSave={onSave}
            onDelete={onDelete}
            savedArticles={savedArticles}
            isSavedPage={false}
            image={item.urlToImage}
            date={item.publishedAt} // Formatting happens inside NewsCard
            title={item.title}
            text={item.description}
            source={item.source?.name || item.source}
            keyword={keyword}
          />
        ))}
      </div>

      {visibleCount < articles.length && (
        <button 
          className="news-card-list__button" 
          type="button" 
          onClick={handleShowMore}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;