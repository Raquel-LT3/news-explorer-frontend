// src/components/SearchForm/SearchForm.jsx
import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [topic, setTopic] = useState(""); 
  const [placeholder, setPlaceholder] = useState("Enter topic");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the input is empty or just spaces
    if (topic.trim().length === 0) {
      setPlaceholder("Please enter a keyword");
      setTopic(""); // Clear any spaces the user might have typed
      return;
    }

    // If valid, pass the topic back to App.jsx
    onSearch(topic); 
    setPlaceholder("Enter topic"); // Reset placeholder for next time
  };

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <input 
        className="search-form__input" 
        placeholder={placeholder} // Use the dynamic state here
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;