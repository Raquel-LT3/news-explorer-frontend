// src/components/NewsCardList/NewsCardList.jsx

import React, { useState } from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { formatDate } from '../../utils/dateUtils';

// 1. Receive the 'articles' prop from App.jsx
function NewsCardList({ isLoggedIn, onSave, savedArticles, articles = [], keyword }) {
  
  // 2. State to track how many cards are currently visible
  const [visibleCount, setVisibleCount] = useState(3);

  // 3. Handler to show 3 more cards
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__grid">
        {/* 4. Use .slice() to only show the specific number of visible cards */}
        {articles.slice(0, visibleCount).map((item, index) => (
          <NewsCard 
            key={index}
            article={item} 
            isLoggedIn={isLoggedIn}
            onSave={onSave}
            savedArticles={savedArticles}
            isSavedPage={false}
            // 5. Map the real API field names to your NewsCard props
            image={item.urlToImage}
            date={formatDate(item.publishedAt)} // Format the API date string
            title={item.title}
            text={item.description}
            source={item.source?.name || item.source}
           keyword={keyword}
          />
        ))}
      </div>

      {/* 6. Only show the button if there are more articles left to show */}
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