import React from 'react';
import './Experience.css';

const experiences = [
  {
    title: "Industry Cell Trainee",
    company: "CodeGen International",
    duration: "Aug 2024 - Oct 2024 · 3 mos",
    logo: "/img/logos/codegen.jpeg"
  },
  {
    title: "Senior Software Engineer",
    company: "Code94 Labs",
    duration: "Jun 2024 - Sep 2024 · 4 mos",
    logo: "/img/logos/code94.jpeg"
  },
  {
    title: "Senior Software Engineer",
    company: "Coduza (PVT) LTD",
    duration: "Feb 2023 - Apr 2024 · 1 yr 3 mos",
    logo: "/img/logos/coduza.jpeg"
  },
  {
    title: "Software Engineering Consultant (Contract)",
    company: "Commercial Bank Tech Solutions Ltd.",
    duration: "Feb 2022 - Aug 2022 · 7 mos",
    logo: "/img/logos/cbctech.jpeg"
  },
  {
    title: "Software Engineer",
    company: "Coduza (PVT) LTD",
    duration: "Dec 2021 - Feb 2023 · 1 yr 3 mos",
    logo: "/img/logos/coduza.jpeg"
  },
  {
    title: "Software Engineer Trainee",
    company: "Coduza (PVT) LTD",
    duration: "Dec 2020 - Dec 2021 · 1 yr 1 mo",
    logo: "/img/logos/coduza.jpeg"
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="content">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <div className="experience-details">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p>{exp.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;