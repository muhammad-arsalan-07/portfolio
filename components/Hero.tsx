'use client';

import { useState, useEffect } from 'react';

const typewriterRoles = [
  'Web Developer',
  'Front-End Developer',
  'Back-End Developer',
  'Full Stack Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = typewriterRoles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (text.length < currentRole.length) {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length + 1));
        }, 90);
      } else {
        // Pause when full word is typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => {
          setText(currentRole.substring(0, text.length - 1));
        }, 45);
      } else {
        // Pause briefly at empty before switching to next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typewriterRoles.length);
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="home section" id="home">
      <div className="home_container container">
        <div className="home_content">
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
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  fill="#111827"
                />
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
              <span className="home_intro_text">
                <span className="home_hand">👋</span> Hello I&apos;am
              </span>
              <br />
              Muhammad Arsalan
            </h1>
            <h3 className="home_subtitle">
              <span>{text}</span>
              <span className="animate-pulse">|</span>
            </h3>
            <p className="home_description" data-aos="zoom-in">
              Full-stack developer with experience in developing and managing web applications. Strong knowledge of React, Node Js, and Express Js. Experienced in creating unit and end-to-end tests.
            </p>

            <a
              href="https://github.com/muhammad-arsalan-07"
              target="_blank"
              rel="noopener noreferrer"
              className="button button_flex"
              data-aos="flip-left"
            >
              Github Account
              <i className="uil uil-github-alt button_icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
