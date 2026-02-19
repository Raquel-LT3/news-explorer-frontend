// src/components/SavedNews/SavedNews.jsx

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCard from '../NewsCard/NewsCard'; // Import NewsCard
import './SavedNews.css';

// 1. Accept savedArticles and onDelete as props
function SavedNews({ username, savedArticles, onDelete }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader username={username} savedArticles={savedArticles} />
      
      <section className="saved-news__main"> 
        <div className="saved-news__container">
          {/* 2. Map through the savedArticles array to render cards */}
          <div className="news-card-list__grid">
            {savedArticles.map((article) => (
              <NewsCard
                key={article._id || article.url} // Use a unique ID or URL as key
                article={article}
                isLoggedIn={true}
                isSavedPage={true}
                onDelete={onDelete}
                savedArticles={savedArticles}
                // Mapping display properties to match your NewsCard props
                image={article.image || article.urlToImage}
                date={article.date || article.publishedAt}
                title={article.title}
                text={article.text || article.description}
                source={article.source?.name || article.source}
                keyword={article.keyword}
              />
            ))}
          </div>
          
          {/* Show a message if no articles are saved */}
          {savedArticles.length === 0 && (
            <p className="saved-news__no-articles">You haven't saved any articles yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default SavedNews;