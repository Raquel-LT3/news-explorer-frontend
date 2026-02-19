// src/components/SavedNews/SavedNews.jsx

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import NewsCardList from '../NewsCardList/NewsCardList'; // You'll build this soon!
import './SavedNews.css';

function SavedNews({ username }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader username={username} />
      {/* This section provides the edge-to-edge grey background */}
      <section className="saved-news__main"> 
        {/* This container centers the cards and limits width to 1440px */}
        <div className="saved-news__container">
          <div className="saved-news__placeholder">
             {/* NewsCardList will go here */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SavedNews;