import ProjectCard, { ProjectItem } from './ProjectCard';

export default function Projects() {
  const projectsList: ProjectItem[] = [
    {
      title: 'Qntar',
      image: '/assets/qntar.jpg',
      description: 'A financial management platform that connects users with their bank accounts to fetch and organize transaction history. The platform provides tools for managing budgets and financial goals, while offering detailed reports to analyze cash flow, income, spending, and overall financial performance.',
      technologies: ['Next.js', 'Nest.js', 'PostgreSQL', 'Novu', 'BullMQ'],
      aos: 'fade-right',
    },
    {
      title: 'Exploriee',
      image: '/assets/exploriee.jpg',
      description: 'A tourism booking platform that connects tour suppliers with consumers, allowing suppliers to create and manage trips while customers can explore available experiences, select tickets, add optional add-ons, and complete their bookings online.',
      technologies: ['React.js', 'Nest.js', 'PostgreSQL', 'Docker', 'Redis'],
      aos: 'fade-left',
    },
    {
      title: 'Banaha',
      image: '/assets/banaha.jpg',
      description: 'A platform for managing home-building projects, connecting clients with engineers and contractors. Users can create professional profiles, explore available experts, create construction projects, and assign engineers or contractors to manage their building process.',
      technologies: ['Nest.js', 'MongoDB', 'Docker'],
      aos: 'fade-right',
    },
    {
      title: 'MBFX',
      image: '/assets/mbfx.jpg',
      description: 'Designed and developed the user interface for a modern trading platform, focusing on a clean, responsive layout and an engaging user experience.',
      technologies: ['HTML', 'CSS'],
      aos: 'fade-left',
    },
    {
      title: 'Create Smart',
      image: '/assets/create-smart.jpg',
      description: 'A platform for creating and editing presentations and email templates, allowing users to customize their content and export completed designs as HTML.',
      technologies: ['JavaScript', 'TypeScript', 'React.js', 'Redux.js'],
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

