"use client";

import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">Sudeep Shetty</h1>

        <h2 className="hero-role">Full Stack Developer</h2>

        <p className="hero-description">
          Passionate Full Stack Developer with experience in Java, React, and
          Next.js. I love developing clean, efficient, and scalable applications
          while continuously learning new technologies and embracing new
          challenges.
        </p>

        <div className="hero-buttons">
          <a href="/Resume.pdf" download className="primary-btn">
            Download Resume
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-circle">
          <img src="/profile.jpeg" alt="Sudeep Shetty" />
        </div>
      </div>
    </section>
  );
}
