// src/components/SearchForm/SearchForm.jsx
import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  // Create a state to hold the text the user types
  const [topic, setTopic] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the typed word ('nature' or 'nothing') back to App.jsx
    onSearch(topic); 
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input 
        className="search-form__input" 
        placeholder="Enter topic" 
        required 
        value={topic}
        onChange={(e) => setTopic(e.target.value)} // Update state as you type
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;