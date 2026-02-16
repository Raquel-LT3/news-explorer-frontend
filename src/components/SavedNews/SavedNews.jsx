// src/components/SavedNews/SavedNews.jsx

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import NewsCardList from '../NewsCardList/NewsCardList'; // You'll build this soon!
import './SavedNews.css';

function SavedNews() {
  return (
    <div className="saved-news">
      <SavedNewsHeader />
      <section className="saved-news__container">
        {/* NewsCardList will go here later to display saved articles */}
        <div className="saved-news__placeholder">
          {/* NewsCardList isSavedNews={true} */}
        </div>
      </section>
    </div>
  );
}

export default SavedNews;