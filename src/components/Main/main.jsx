// src/components/Main/Main.jsx

import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Main.css';

function Main({ onSearch }) { // 1. Receive the prop here
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">What's going on in the world?</h1>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal account.
        </p>
        <SearchForm onSearch={onSearch} /> {/* 2. Pass it down here */}
      </div>
    </section>
  );
}

export default Main;