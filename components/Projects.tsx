import ProjectCard, { ProjectItem } from './ProjectCard';

export default function Projects() {
  const projectsList: ProjectItem[] = [
    {
      title: 'Qntar',
      image: '/assets/qntar.jpg',
      description: 'A financial management platform for connecting bank accounts, organizing transactions, managing budgets and financial goals, and analyzing financial performance.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'Novu', 'BullMQ'],
      aos: 'fade-right',
    },
    {
      title: 'Exploriee',
      image: '/assets/exploriee.jpg',
      description: 'A tourism booking platform that connects tour suppliers with consumers, allowing suppliers to manage trips while customers can explore experiences and book tickets online.',
      technologies: ['React.js', 'Nest.js', 'PostgreSQL', 'Docker', 'Redis'],
      aos: 'fade-left',
    },
    {
      title: 'Banaha',
      image: '/assets/banaha.jpg',
      description: 'A platform for managing construction projects, connecting clients with engineers and contractors to create, manage, and complete their projects.',
      technologies: ['TypeScript', 'Node.js', 'Nest.js', 'MongoDB', 'Docker'],
      aos: 'fade-right',
    },
    {
      title: 'MBFX',
      image: '/assets/mbfx.jpg',
      description: 'Designed and developed the user interface for a modern trading platform, focusing on a clean, responsive design and smooth user experience.',
      technologies: ['HTML', 'CSS'],
      aos: 'fade-left',
    },
    {
      title: 'Createsmart',
      image: '/assets/create-smart.jpg',
      description: 'A platform for creating and editing presentations and email templates, allowing users to customize their content and export completed designs as HTML.',
      technologies: ['JavaScript', 'TypeScript', 'React.js', 'Redux.js', 'GitHub'],
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

