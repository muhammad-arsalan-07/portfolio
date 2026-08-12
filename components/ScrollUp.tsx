'use client';

import { useState, useEffect } from 'react';

export default function ScrollUp() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 560) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`scroll_up ${showScroll ? 'show_scroll' : ''}`}
      aria-label="Scroll to top"
    >
      <i className="uil uil-arrow-up scroll_up_icon"></i>
    </a>
  );
}
