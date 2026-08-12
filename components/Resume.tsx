export default function Resume() {
  const educationData = [
    {
      title: 'Bachelor In Computer Science',
      institution: 'Virtual University - Karachi',
      date: '2022 - Present',
    },
    {
      title: 'Intermediate',
      institution: 'F.G Boys Inter College - Karachi',
      date: '2018 - 2020',
    },
    {
      title: 'Matriculation',
      institution: 'P.R Secondary School - Karachi',
      date: '2016 - 2018',
    },
  ];

  const workData = [
    {
      title: 'React JS Developer',
      institution: 'BSS - Karachi',
      date: '2022 - Present',
    },
  ];

  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">
        Resume
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My personal journey
      </span>

      <div className="resume_container container grid">
        {/* Education Column */}
        <div data-aos="fade-right">
          <h3 className="resume_heading">
            <i className="uil uil-graduation-cap resume_icon"></i>
            Education
          </h3>

          <div
            className="resume_sub_container"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              {educationData.map((item, index) => (
                <div className="education_container" key={index}>
                  <span className="resume_rounded"></span>
                  <span className="resume_line"></span>
                  <h3 className="education_title">{item.title}</h3>
                  <span className="education_subtitle">{item.institution}</span>
                  <div className="education_subtitle">
                    <i className="uil uil-calendar-alt calendar_icon"></i>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Column */}
        <div data-aos="fade-left">
          <h3 className="resume_heading">
            <i className="uil uil-briefcase-alt resume_icon"></i>
            Work
          </h3>

          <div
            className="resume_sub_container"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div>
              {workData.map((item, index) => (
                <div className="education_container" key={index}>
                  <span className="resume_rounded"></span>
                  <span className="resume_line"></span>
                  <h3 className="education_title">{item.title}</h3>
                  <span className="education_subtitle">{item.institution}</span>
                  <div className="education_subtitle">
                    <i className="uil uil-calendar-alt calendar_icon"></i>
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
