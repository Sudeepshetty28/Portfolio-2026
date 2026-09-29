"use client";

import React from "react";
import "./Skills.css";
import { TbBulb } from "react-icons/tb";


export default function Skills() {
  return (
    <section  id="skills" className="skills-section">

      {/* Heading */}
      <h2 className="section-title">Skills</h2>

      <div className="services">

        {/* Technical Skills */}
        <div className="service-card">
          <div className="service-icon"><TbBulb /></div>
          <h3>Technical Skills</h3>
          <p>
            React, HTML, JavaScript, CSS, Java, Python
          </p>
        </div>

        {/* Soft Skills */}
        <div className="service-card">
          <div className="service-icon"><TbBulb /></div>
          <h3>Soft Skills</h3>
          <p>
            Teamwork, Time Management, Effective Communication, Critical Thinking
          </p>
        </div>

      </div>
    </section>
  );
}