import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">Resume</h2>
      <span className="section_subtitle" data-aos="zoom-in">My personal journey</span>

      <div className="resume_container container grid">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Computer Science",
              location: "Virtual University - Karachi",
              calender: "2022 - Present",
            },
            {
              title: "Intermediate",
              location: "F.G Boys Inter College - Karachi",
              calender: "2018 - 2020",
            },
            {
              title: "Matriculation",
              location: "P.R Secondary School - Karachi",
              calender: "2016 - 2018",
            },
          ]}
        />

        <ResumeBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "React JS Developer",
              location: "BSS - Karachi",
              calender: " 2022 - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;
