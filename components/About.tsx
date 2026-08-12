import Image from 'next/image';

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title" data-aos="zoom-in">
        About Me
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My introduction
      </span>

      <div className="about_container container">
        <Image
          src="/assets/about.jpg"
          alt="Muhammad Arsalan About"
          width={350}
          height={350}
          className="about_img"
          data-aos="fade-right"
        />

        <div className="about_data">
          <div className="about_info">
            <div
              className="about_box"
              data-aos="fade-left"
              data-aos-delay="0"
            >
              <i className="uil uil-award about_icon"></i>
              <h3 className="about_title">Experience</h3>
              <span className="about_subtitle">2+ years</span>
            </div>

            <div
              className="about_box"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <i className="uil uil-suitcase-alt about_icon"></i>
              <h3 className="about_title">Completed</h3>
              <span className="about_subtitle">20+ projects</span>
            </div>

            <div
              className="about_box"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <i className="uil uil-graduation-cap about_icon"></i>
              <h3 className="about_title">Qualification</h3>
              <span className="about_subtitle">Bachelors</span>
            </div>
          </div>

          <p className="about_description" data-aos="fade-up">
            I am Muhammad Arsalan, web developer from Pakistan and currently studying in Virtual University. I have experience as full-stack developer and ability to work independently and as part of a team, and comfortable with agile development methods.
          </p>

          <a
            download=""
            href="/assets/John-Cv.pdf"
            className="button button_flex"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="flip-left"
          >
            Download CV
            <i className="uil uil-file-download-alt button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
