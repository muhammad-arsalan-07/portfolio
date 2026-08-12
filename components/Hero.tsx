'use client';

import { useState, useEffect } from 'react';

const typewriterRoles = [
  'Web Developer',
  'Front-End Developer',
  'Back-End Developer',
  'Full Stack Developer',
  'UI/UX Designer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          {/* Socials */}
          <div className="home_social" data-aos="fade-right">
            <a
              href="https://github.com"
              className="home_social_icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href="https://dribbble.com"
              className="home_social_icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-dribbble"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="home_social_icon"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
          </div>

          {/* Profile Image with Blob Mask */}
          <div className="home_img" data-aos="zoom-in-left">
            <svg
              className="home_profile_image_svg"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image
                  className="home_profile_image"
                  x="12"
                  y="18"
                  href="/assets/perfil.png"
                  width="180"
                  height="180"
                />
              </g>
            </svg>
          </div>

          {/* Home Data */}
          <div className="home_data">
            <h1 className="home_title" data-aos="zoom-in-right">
              Hello I'am{' '}
              <span className="home_hand" data-aos="zoom-in-right">
                <svg
                  className="wavingIcon"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.48 0 4.5-2.02 4.5-4.5H23zM1 7c0-3.31 2.69-6 6-6v1.5C4.52 2.5 2.5 4.52 2.5 7H1zm7.01-2.68l-4.6 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.07c.49-.49.49-1.28 0-1.77a1.25 1.25 0 00-1.77 0l-4.42 4.42-.71-.71 6.54-6.54c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-5.83 5.83-.71-.71 6.89-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89-.69-.7 5.48-5.48c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4.003 4.003 0 01-.33 5.28l-.71-.71a3 3 0 000-4.24l-.35-.35 4.07-4.07c.49-.49.49-1.28 0-1.77a1.27 1.27 0 00-1.78.01z" />
                </svg>
              </span>
              <br />
              Muhammad Arsalan
            </h1>
            <h3 className="home_subtitle">
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </h3>
            <p className="home_description" data-aos="zoom-in">
              I'm creative web developer based in Karachi, and I'm very passionate and dedicated to my work.
            </p>

            <a
              href="#contact"
              className="button button_flex"
              data-aos="flip-left"
            >
              Say Hello
              <i className="uil uil-message button_icon"></i>
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="home_scroll">
          <a href="#about" className="home_scroll_button button_flex">
            <i className="uil uil-mouse-alt home_scroll_mouse"></i>
            <span className="home_scroll_name">Scroll Down</span>
            <i className="uil uil-arrow-down home_scroll_arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
