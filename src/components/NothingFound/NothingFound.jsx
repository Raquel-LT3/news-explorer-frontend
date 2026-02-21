// src/components/NothingFound/NothingFound.jsx

import React from 'react';
import './NothingFound.css';
import notFoundIcon from '../../images/not-found_v1.svg';

/**
 * NothingFound component displayed when search results are empty
 */
function NothingFound() {
  return (
    <section className="nothing-found">
      <img 
        src={notFoundIcon} 
        alt="Magnifying glass showing nothing found" 
        className="nothing-found__icon" 
      />
      <h2 className="nothing-found__title">Nothing found</h2>
      <p className="nothing-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;