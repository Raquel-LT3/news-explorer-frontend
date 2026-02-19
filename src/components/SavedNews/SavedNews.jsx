// src/components/SavedNews/SavedNews.jsx

import React from "react";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ username, savedArticles, onDelete }) {
  // Logic MUST be inside the function so it has access to savedArticles
  const keywords = savedArticles.map((article) => article.keyword);
  const uniqueKeywords = [...new Set(keywords)];

  return (
    <div className="saved-news">
      <SavedNewsHeader username={username} savedArticles={savedArticles} />

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

          {savedArticles.length === 0 ? (
            <p className="saved-news__no-articles">
              You haven't saved any articles yet.
            </p>
          ) : (
            <p className="saved-news__keywords">
              By keywords: <b>{uniqueKeywords.join(", ")}</b>
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default SavedNews;