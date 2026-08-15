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
            href="https://github.com/muhammad-arsalan-07"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-arsalan-71a673265"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadarsalan7531@gmail.com"
            className="footer_social_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="uil uil-envelope"></i>
          </a>
        </div>

        <span className="footer_copy">
          &#169; 2026 Muhammad Arsalan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
