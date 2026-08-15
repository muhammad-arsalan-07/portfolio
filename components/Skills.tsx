export default function Skills() {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'];
  const backendSkills = ['Node.js', 'Nest.js', 'Express.js'];
  const databaseSkills = ['MongoDB', 'PostgreSQL', 'Firebase'];
  const toolsAndTechnologiesSkills = ['Git', 'GitHub', 'Jira', 'Bitbucket'];

  return (
    <section className="skills section" id="skills">
      <h2 className="section_title" data-aos="zoom-in">
        Skills
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Technologies I Work With
      </span>

      <div className="skills_container container grid">
        {/* Frontend Development Card */}
        <div className="skills_content" data-aos="fade-right">
          <h3 className="skills_title">Frontend Development</h3>

          <div className="skills_box">
            {frontendSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <h3 className="skills_name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Development Card */}
        <div className="skills_content" data-aos="fade-left">
          <h3 className="skills_title">Backend Development</h3>

          <div className="skills_box">
            {backendSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill}
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <h3 className="skills_name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Database Card */}
        <div className="skills_content" data-aos="fade-right">
          <h3 className="skills_title">Databases</h3>

          <div className="skills_box">
            {databaseSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <h3 className="skills_name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools and Technologies Card */}
        <div className="skills_content" data-aos="fade-left">
          <h3 className="skills_title">Tools & Technologies</h3>

          <div className="skills_box">
            {toolsAndTechnologiesSkills.map((skill) => (
              <div
                className="skills_data"
                key={skill}
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <i className="uil uil-check-circle skills_icon"></i>
                <h3 className="skills_name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
