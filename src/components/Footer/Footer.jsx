// src/components/Footer/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/Union.png";

function Footer() {
  return (
    <footer className="footer">
      {/* 1. Copyright: Left on Desktop / Bottom on Mobile */}
      <p className="footer__copyright">
        © 2026 Supersite, Powered by News API
      </p>

      {/* 2. Navigation: Right on Desktop / Top on Mobile */}
      <div className="footer__navigation-wrapper">
        <nav className="footer__nav">
          <Link to="/" className="footer__link">Home</Link>
          <a href="https://tripleten.com" className="footer__link" target="_blank" rel="noreferrer">
            TripleTen
          </a>
        </nav>

        <div className="footer__social">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
