import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // We target the top of the document
    const toggleVisibility = () => {
      // Logic: Show button as soon as we scroll 100px (roughly the navbar height)
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'show' : 'hide'}`}>
      <button onClick={scrollToTop} className="scroll-btn" aria-label="Back to top">
        ↑
      </button>
    </div>
  );
};

export default ScrollToTop;