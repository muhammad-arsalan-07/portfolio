'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }

      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveNav('#' + sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMenu]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: 'uil-estate' },
    { href: '#about', label: 'About', icon: 'uil-user' },
    { href: '#skills', label: 'Skills', icon: 'uil-file-alt' },
    { href: '#resume', label: 'Resume', icon: 'uil-graduation-cap' },
    { href: '#projects', label: 'Projects', icon: 'uil-scenery' },
    { href: '#contact', label: 'Contact', icon: 'uil-message' },
  ];

  return (
    <header className={`header ${scrollHeader ? 'scroll_header' : ''}`}>
      <nav className="nav container">
        <a
          href="#home"
          className={`nav_logo ${showMenu ? 'nav_logo_hidden' : ''}`}
        >
          Muhammad Arsalan
        </a>

        <div className={`nav_menu ${showMenu ? 'show_menu' : ''}`}>
          <ul className="nav_list">
            {navLinks.map((link) => (
              <li className="nav_item" key={link.href}>
                <a
                  href={link.href}
                  onClick={() => {
                    setActiveNav(link.href);
                    setShowMenu(false);
                  }}
                  className={`nav_link ${activeNav === link.href ? 'active_link' : ''}`}
                >
                  <i className={`uil ${link.icon} nav_icon`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Backdrop for mobile menu */}
        <div
          className={`nav_overlay ${showMenu ? 'show_overlay' : ''}`}
          onClick={() => setShowMenu(false)}
          aria-hidden={!showMenu}
        />

        <button
          type="button"
          className="nav_toggle"
          onClick={() => setShowMenu(!showMenu)}
          aria-label={showMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={showMenu}
        >
          <i
            className={`uil ${showMenu ? 'uil-times' : 'uil-apps'} nav_toggle_icon`}
          ></i>
        </button>
      </nav>
    </header>
  );
}
