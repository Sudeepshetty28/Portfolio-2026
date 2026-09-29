"use client";

import "./Internship.css";
import { IoCodeWorkingSharp } from "react-icons/io5";


export default function Internship() {
  return (
    <section id="internship" className="internship-section">
      <div className="internship-container">
        <h2 className="section-title">Internship</h2>

        <div className="internship-card">
          <div className="internship-icon"><IoCodeWorkingSharp /></div>

          <h3>Web Development Intern</h3>

          <h4>DevVoid Software (OPC) Private Limited</h4>

          <span className="internship-duration">
            June 20, 2025 – August 3, 2025
          </span>

          <p>
            Worked as a Web Development Intern, gaining hands-on experience in
            frontend and backend development. Developed responsive web pages,
            collaborated on real-world projects, and enhanced skills in modern
            web technologies and software development practices.
          </p>
        </div>
      </div>
    </section>
  );
}