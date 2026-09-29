"use client";

import "./Projects.css";

const projects = [
  {
    title: "React Portfolio Website",
    year: "2024 – 2025",
    description:
      "Developed a responsive personal portfolio using React, HTML, CSS, and JavaScript. Implemented reusable components, modern UI design, and deployed the project on Vercel with GitHub version control.",
    tech: "React • HTML • CSS • JavaScript • Vercel • GitHub",
    live: "#",
    github: "#",
  },
  {
    title: "To-Do List Web Application",
    year: "2025 – 2026",
    description:
      "Built a full-stack task management application using the MERN stack. Implemented CRUD operations, REST APIs, MongoDB integration, and deployed the application using Vercel.",
    tech: "MongoDB • Express.js • React • Node.js • REST API",
    live: "#",
    github: " https://github.com/Sudeepshetty28/Todolist",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-header">
                <h3>{project.title}</h3>
                <span>{project.year}</span>
              </div>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                <strong>Technologies:</strong>
                <p>{project.tech}</p>
              </div>

              <div className="project-buttons">
                <a href={project.live} target="_blank">
                  🔗 Live Demo
                </a>

                <a href={project.github} target="_blank">
                  💻 GitHub
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}