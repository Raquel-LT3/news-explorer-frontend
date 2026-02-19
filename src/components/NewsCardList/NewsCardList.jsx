// src/components/NewsCardList/NewsCardList.jsx

import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import nature1 from '../../images/nature1.jpg';
import nature2 from '../../images/nature2.jpg';
import grandTeton from '../../images/grandeteton.jpg';

function NewsCardList({ isLoggedIn }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__grid">
        <NewsCard 
          isLoggedIn={isLoggedIn}
          isSearchResult={true}
          isSavedPage={false}
          keyword="Nature"
          image={nature1}
          date="November 4, 2020"
          title="Everyone Needs a Special 'Sit Spot' in Nature"
          text="Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me..."
          source="TREEHUGGER"
        />
        <NewsCard 
          isLoggedIn={isLoggedIn}
          isSearchResult={true}
          keyword="Nature"
          isSavedPage={false}
          image={nature2}
          date="February 19, 2019"
          title="Nature makes you better"
          text="We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest..."
          source="NATIONAL GEOGRAPHIC"
        />
        <NewsCard 
          isLoggedIn={isLoggedIn}
          isSearchResult={true}
          isSavedPage={false}
          keyword="Nature"
          image={grandTeton}
          date="October 19, 2020"
          title="Grand Teton Renews Historic Crest Trail"
          text="“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933..."
          source="NATIONAL PARKS TRAVELER"
        />
      </div>
      <button className="news-card-list__button" type="button">Show more</button>
    </section>
  );
}

export default NewsCardList;