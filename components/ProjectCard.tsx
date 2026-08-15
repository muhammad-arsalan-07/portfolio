'use client';

import Image from 'next/image';

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  aos?: string;
}

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project_card_new group" data-aos={project.aos}>
      {/* DESKTOP CARD VIEW */}
      <div className="project_desktop_card">
        <div className="project_img_wrapper">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="project_card_img"
          />
          <div className="project_card_gradient" />
        </div>

        <div className="project_overlay">
          <div className="project_overlay_content">
            <h3 className="project_card_title">{project.title}</h3>

            <p className="project_card_description">{project.description}</p>

            <div className="project_tech_list">
              {project.technologies.map((tech, idx) => (
                <span className="project_tech_badge" key={idx}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERTICAL CARD VIEW */}
      <div className="project_mobile_card">
        <div className="project_mobile_img_wrapper">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={280}
            className="project_mobile_img"
          />
        </div>

        <div className="project_mobile_content">
          <h3 className="project_mobile_title">{project.title}</h3>

          <p className="project_mobile_description">{project.description}</p>

          <div className="project_mobile_tech_list">
            {project.technologies.map((tech, idx) => (
              <span className="project_mobile_tech_badge" key={idx}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

