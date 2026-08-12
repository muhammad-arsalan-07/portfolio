import Image from 'next/image';

export default function Projects() {
  const projectsList = [
    {
      title: 'Covid Tracker App',
      image: '/assets/covid.png',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      aos: 'fade-right',
    },
    {
      title: 'Expense Tracker App',
      image: '/assets/expense.png',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      aos: 'fade-left',
    },
    {
      title: 'Shopping Card',
      image: '/assets/shopping.png',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      aos: 'fade-right',
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container grid">
        {projectsList.map((project, index) => (
          <div className="project_item" key={index} data-aos={project.aos}>
            <Image
              src={project.image}
              alt={project.title}
              width={450}
              height={250}
              className="project_image"
            />
            <h3 className="project_heading">{project.title}</h3>
            <div className="project_link">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="button button_flex"
              >
                Visit Site
                <i className="uil uil-globe project_icon"></i>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="button button_flex"
              >
                View On Github
                <i className="uil uil-github project_icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
