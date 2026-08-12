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
      const scrollY = window.pageYOffset;

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
        <a href="#home" className="nav_logo" data-aos="fade-right">
          Muhammad Arsalan
        </a>

        <div
          className={`nav_menu ${showMenu ? 'show_menu' : ''}`}
          data-aos="fade-left"
        >
          <ul className="nav_list grid">
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

          <i
            className="uil uil-times nav_close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>

        <div className="nav_toggle" onClick={() => setShowMenu(!showMenu)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
