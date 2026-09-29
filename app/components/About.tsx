"use client";

import "./About.css";

import { RiReactjsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";




export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-wrapper">
        {/* Left Side */}

        <div className="about-image">
          <div className="image-ring"></div>

          <img src="profile.jpeg"/>
        </div>

        {/* Right Side */}

        <div className="about-content">
          <h3>
            Hello, I'm <span>Sudeep Shetty</span> 
          </h3>

          <p>
            I'm a passionate <strong>Full Stack Developer</strong> and Computer
            Science student at NMAM Institute of Technology. I enjoy building
            scalable, responsive, and user-friendly applications while
            continuously learning new technologies.
          </p>

          <p>
            My primary focus is creating modern web applications using Java,
            React, Next.js, Node.js, Express.js, and MongoDB. I enjoy solving
            real-world problems through clean and efficient code.
          </p>

          <p>
            I believe in continuous learning, teamwork, and writing maintainable
            code that delivers meaningful user experiences.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* What I Do */}

      <div className="services">
        <div className="service-card">
          <div className="service-icon"><RiReactjsFill /></div>

          <h3>Frontend Development</h3>
          <center>
            <p>
              Creating modern, interactive, and responsive user interfaces using
              React and Next.js.
            </p>
          </center>
        </div>

        <div className="service-card">
          <div className="service-icon"><IoSettings /> </div>

          <h3>Backend Development</h3>
          <center>
            <p>
              Developing secure REST APIs using Java, Spring Boot, Node.js,
              Express.js, and database integration.
            </p>
          </center>
        </div>

        <div className="service-card">
          <div className="service-icon"><FaDatabase /></div>

          <h3>Database</h3>

          <center>
            <p>
              Working with SQL and MySQL for database design, query
              optimization, CRUD operations, and seamless backend integration.
            </p>
          </center>
        </div>
      </div>
    </section>
  );
}
