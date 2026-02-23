// src/components/Footer/Footer.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";

function Footer() {
  return (
    <footer className="footer">
      {/* Copyright information */}
      <p className="footer__copyright">
        © 2026 Supersite, Powered by News API
      </p>

      {/* Navigation and Social Links container */}
      <div className="footer__navigation-wrapper">
        <nav className="footer__nav">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a 
            href="https://tripleten.com" 
            className="footer__link" 
            target="_blank" 
            rel="noreferrer"
          >
            TripleTen
          </a>
        </nav>

        <div className="footer__social">
          <a 
            href="https://github.com" 
            className="footer__social-link" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a 
            href="https://linkedin.com" 
            className="footer__social-link" 
            target="_blank" 
            rel="noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;