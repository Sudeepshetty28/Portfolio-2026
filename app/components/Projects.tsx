"use client";

import "./Projects.css";

const projects = [
  {
    title: "Next.js Portfolio Website",
    year: "2025 – 2026",
    description:
      "Developed a responsive personal portfolio using Next.js, HTML, CSS, and JavaScript. Implemented reusable components, modern UI design, and deployed the project on Vercel with GitHub version control.",
    tech: "Next.js • HTML • CSS • JavaScript • Vercel • GitHub",
    github: "#",
  },
  {
    title: "Bookmark Service Web Application",

    year: "2024 – 2025",

    description:
      "Developed a full-stack bookmark management application using React and Spring Boot. Implemented CRUD operations to add, view, update, and delete bookmarks, with REST API integration and database management using Spring Data JPA and H2.",

    tech: "React • Java • Spring Boot • Spring Data JPA • H2 • REST API",

    

    github: "#",
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

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                <strong>Technologies:</strong>
                <p>{project.tech}</p>
              </div>


                <a href={project.github} target="_blank">
                  💻 GitHub
                </a>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
