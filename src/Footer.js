import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="footer-links">
          <a href="/contact-us">Contact Us</a>
          <a href="/work-for-us">Work for Us</a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;