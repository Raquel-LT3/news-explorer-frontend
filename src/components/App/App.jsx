// src/components/App/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components here as you create them
// import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          {/* Main page route */}
          <Route path="/" element={<h1>Main Page Content</h1>} />
          
          {/* Saved News route */}
          <Route path="/saved-news" element={<h1>Saved Articles</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;