export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title" data-aos="zoom-in">
          Muhammad Arsalan
        </h1>

        <ul className="footer_list" data-aos="fade-down">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social" data-aos="fade-up">
          <a
            href="https://www.facebook.com/arsalan.tanoli.712"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <i className="uil uil-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; Crypticalcoder. All rights reserved
        </span>
      </div>
    </footer>
  );
}
