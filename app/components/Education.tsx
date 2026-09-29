"use client";

import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education">

      <div className="edu-title">
        <h2>Education</h2>
        <div className="edu-line"></div>
      </div>

      <div className="edu-container">

        {/* College */}
        <div className="edu-card">
          <div className="edu-dot"></div>

          <div className="edu-content">
            <h3>Bachelor of Engineering (Btech) - Computer Science</h3>
            <h4>NMAM Institute of Technology, Nitte</h4>
            <span>2023 – 2027 (Pursuing)</span>

            <p>
              Currently pursuing Computer Science Engineering with focus on
              Full Stack Development, Data Structures, Algorithms, and Software Engineering.
            </p>
          </div>
        </div>

        
        <div className="edu-card">
          <div className="edu-dot"></div>

          <div className="edu-content">
            <h3>PoornaPrajna pu College Udupi</h3>
            <h4>Pcmb</h4>
            <span>2021– 2023</span>

            <p>
              Studied Physics, Chemistry, Mathematics, and Biology.
              Built strong foundation in mathematics and science. 
            </p>
          </div>
        </div>
        
        <div className="edu-card">
          <div className="edu-content">
            <h3>Perdoor High School Perdoor</h3>
            <h4>high School</h4>
            <span>2018 – 2021</span>
            <p> 
                Completed my high school education in Perdoor High School.
            </p>
            </div></div>

       
        <div className="edu-card">
          <div className="edu-dot"></div>

          <div className="edu-content">
            <h3>Fedric Sadanada Kotian Primary School, Perdoor</h3>
            <h4>School</h4>
            <span>2011 – 2018</span>

            <p>
              Completed My education with strong focus on Mathematics and Science.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}