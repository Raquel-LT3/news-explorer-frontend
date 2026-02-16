// src/components/SearchForm/SearchForm.jsx 

import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="search-form">
      <input 
        type="text" 
        className="search-form__input" 
        placeholder="Enter topic" 
        required 
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
}

export default SearchForm;