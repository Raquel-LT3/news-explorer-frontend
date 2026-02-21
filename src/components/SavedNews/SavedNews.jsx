// src/components/SavedNews/SavedNews.jsx

import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

/**
 * SavedNews component displays the user's saved articles
 * and summary of their saved keywords.
 */
function SavedNews({ username, savedArticles, onDelete }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader 
        username={username} 
        savedArticles={savedArticles} 
      />

      <section className="saved-news__main">
        <div className="saved-news__container">
          <div className="news-card-list__grid">
            {savedArticles.map((article) => (
              <NewsCard
                key={article._id || article.url}
                article={article}
                isLoggedIn={true}
                isSavedPage={true}
                onDelete={onDelete}
                savedArticles={savedArticles}
                image={article.image || article.urlToImage}
                date={article.date || article.publishedAt}
                title={article.title}
                text={article.text || article.description}
                source={article.source?.name || article.source}
                keyword={article.keyword}
              />
            ))}
          </div>

          {savedArticles.length === 0 && (
            <p className="saved-news__no-articles">
              You haven't saved any articles yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default SavedNews;