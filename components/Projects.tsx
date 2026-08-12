import ProjectCard, { ProjectItem } from './ProjectCard';

export default function Projects() {
  const projectsList: ProjectItem[] = [
    {
      title: 'Covid Tracker App',
      image: '/assets/covid.png',
      description: 'Real-time global COVID-19 tracker with country-wise statistics and data visualizations.',
      technologies: ['React', 'Chart.js', 'REST API', 'CSS3'],
      demoUrl: 'https://github.com/muhammad-arsalan-07',
      githubUrl: 'https://github.com/muhammad-arsalan-07',
      aos: 'fade-right',
    },
    {
      title: 'Expense Tracker App',
      image: '/assets/expense.png',
      description: 'Personal finance web app for tracking daily income, expenses, and total balance.',
      technologies: ['React', 'Context API', 'JavaScript', 'CSS3'],
      demoUrl: 'https://github.com/muhammad-arsalan-07',
      githubUrl: 'https://github.com/muhammad-arsalan-07',
      aos: 'fade-left',
    },
    {
      title: 'Shopping Cart App',
      image: '/assets/shopping.png',
      description: 'Interactive e-commerce shopping cart interface with item management and real-time total.',
      technologies: ['React', 'Redux', 'Node.js', 'Express'],
      demoUrl: 'https://github.com/muhammad-arsalan-07',
      githubUrl: 'https://github.com/muhammad-arsalan-07',
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
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

