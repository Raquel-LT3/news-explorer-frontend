// src/components/Footer/Footer.jsx // 

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import githubIcon from '../../images/github.svg';
import linkedinIcon from '../../images/Union.png'; 

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <div className="footer__links">
          <Link to="/" className="footer__link">Home</Link>
          <a href="https://tripleten.com" className="footer__link" target="_blank" rel="noreferrer">TripleTen</a>
        </div>
        <div className="footer__social">
          <a href="https://github.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" className="footer__social-link" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;