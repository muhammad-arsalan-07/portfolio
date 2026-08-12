export default function Skills() {
  const frontendSkills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
  ];

  const backendSkills = [
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'Node Js', level: 'Basic' },
    { name: 'Express Js', level: 'Basic' },
    { name: 'Mongo DB', level: 'Basic' },
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in">
        Skills
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My techinal level
      </span>

      <div className="skills_container container grid">
        {/* Frontend Developer Card */}
        <div className="skills_content" data-aos="fade-right">
          <h3 className="skills_title">Frontend Developer</h3>

          <div className="skills_box">
            {frontendSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill.name}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <div>
                  <h3 className="skills_name">{skill.name}</h3>
                  <span className="skills_level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="skills_content" data-aos="fade-left">
          <h3 className="skills_title">Backend Developer</h3>

          <div className="skills_box">
            {backendSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill.name}
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <div>
                  <h3 className="skills_name">{skill.name}</h3>
                  <span className="skills_level">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
