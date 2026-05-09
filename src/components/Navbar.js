import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          Noah James
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)} aria-label="Toggle Theme">
          <div className={`toggle-icon ${isDark ? 'moon' : 'sun'}`}></div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;