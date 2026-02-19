// src/components/NewsCardList/NewsCardList.jsx

import React from 'react';
import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import nature1 from '../../images/nature1.jpg';
import nature2 from '../../images/nature2.jpg';
import grandTeton from '../../images/grandeteton.jpg';

// 1. Add the new props here: onSave, savedArticles
function NewsCardList({ isLoggedIn, onSave, savedArticles }) {
  
  // Mock data array to simulate what will eventually come from the NewsAPI
  const mockArticles = [
    {
      keyword: "Nature",
      image: nature1,
      date: "November 4, 2020",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      text: "Ever since I read Richard Louv's influential book, 'Last Child in the Woods,' the idea of having a special 'sit spot' has stuck with me...",
      source: "TREEHUGGER",
      url: "https://www.treehugger.com/sit-spot-nature", // Added a fake URL as a unique ID
    },
    {
      keyword: "Nature",
      image: nature2,
      date: "February 19, 2019",
      title: "Nature makes you better",
      text: "We all know how good nature can make us feel. We have known it for millennia: the sound of the ocean, the scents of a forest...",
      source: "NATIONAL GEOGRAPHIC",
      url: "https://www.nationalgeographic.com/nature-better",
    },
    {
      keyword: "Nature",
      image: grandTeton,
      date: "October 19, 2020",
      title: "Grand Teton Renews Historic Crest Trail",
      text: "“The linking together of the Cascade and Death Canyon trails, at their heads, took place on October 1, 1933...",
      source: "NATIONAL PARKS TRAVELER",
      url: "https://www.nationalparkstraveler.org/grand-teton",
    }
  ];

  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__grid">
        {mockArticles.map((article, index) => (
          <NewsCard 
            key={index}
            article={article} // Pass the whole object for saving
            isLoggedIn={isLoggedIn}
            onSave={onSave}
            savedArticles={savedArticles}
            isSavedPage={false}
            // Pass the individual display props
            image={article.image}
            date={article.date}
            title={article.title}
            text={article.text}
            source={article.source}
            keyword={article.keyword}
          />
        ))}
      </div>
      <button className="news-card-list__button" type="button">Show more</button>
    </section>
  );
}

export default NewsCardList;