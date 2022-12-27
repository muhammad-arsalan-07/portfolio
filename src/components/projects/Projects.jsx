import React from "react";
import Project from "./Project";
import covid from "../../assets/covid.png";
import expense from "../../assets/expense.png";
import shopping from "../../assets/shopping.png";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title" data-aos="zoom-in">
        Projects
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        Most recent work
      </span>

      <div className="projects_container container grid">
        <Project
          projects={[
            {
              imageURL: covid,
              title: "Covid Tracker App",
              github: "https://github.com",
              demo: "https://www.facebook.com",
            },
            {
              imageURL: expense,
              title: "Expense Tracker App",
              github: "https://github.com",
              demo: "https://www.facebook.com",
            },
            {
              imageURL: shopping,
              title: "Shopping Card",
              github: "https://github.com",
              demo: "https://www.facebook.com",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;
