// src/components/PreLoader/Preloader.jsx

import React from 'react';
import './Preloader.css';
import eclipseIcon from '../../images/eclipse.svg'; // Use your named file

function Preloader() {
  return (
    <section className="preloader">
      <img src={eclipseIcon} alt="Loading" className="preloader__icon" />
      <p className="preloader__text">Searching for news...</p>
    </section>
  );
}

export default Preloader;