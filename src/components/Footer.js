import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <p>Last Updated: May 2026</p>
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/noah-james-b90127321/" 
          target="_blank" 
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://app.joinhandshake.com/profiles/noah-james" 
          target="_blank" 
          rel="noreferrer"
        >
          Handshake
        </a>
      </div>
    </footer>
  );
}

export default Footer;