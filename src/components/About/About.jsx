// src/components/About/About.jsx

import React from 'react';
import './About.css';
import authorImage from '../../images/author.png'; 

function About() {
  return (
    <section className="about">
      <img className="about__image" src={authorImage} alt="Raquel Ortega" />
      <div className="about__content">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          Hi, I’m Raquel! I’m a software engineer in training and a creator who loves building things that look good and work smoothly. I’ve been learning front‑end development with technologies like HTML, CSS, JavaScript, and React. My time at TripleTen taught me how to think like a developer, debug confidently, and deliver real projects from start to finish. I enjoy helping people bring their ideas to life through clean, thoughtful design and code.
        </p>
      </div>
    </section>
  );
}

export default About;