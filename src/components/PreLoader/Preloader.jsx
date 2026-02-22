// src/components/Preloader/Preloader.jsx

import React from 'react';
import './Preloader.css';
import eclipseIcon from '../../images/eclipse.svg';

/**
 * Preloader component displayed during API data fetching
 */
function Preloader() {
  return (
    <section className="preloader">
      <img 
        src={eclipseIcon} 
        alt="Loading spinner" 
        className="preloader__icon" 
      />
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;