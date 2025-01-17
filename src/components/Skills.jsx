import React from "react";

const Skills = () => {
  return (
    <section className="skills animated">
      <div className="skills-detail">
        <h1>Skills</h1>
        <div className="skills-list">
          {/* Hardware Skills */}
          <div>
            <h2>Hardware Skills</h2>
            <ul>
              <li>
                <strong>Electronics</strong>
                <ul>
                  <li>Circuit Designing & Simulation</li>
                  <li>PCB Fabrication</li>
                  <li>Microcontroller & Microprocessor</li>
                </ul>
              </li>
              <li>
                <strong>Instrumentation</strong>
                <ul>
                  <li>Control Systems</li>
                  <li>Process Control</li>
                  <li>Industrial Instrumentation</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Software Skills */}
          <div>
            <h2>Software Skills</h2>
            <ul>
              <li>
                <strong>MERN Stack Developer</strong>
                <ul>
                  <li>Proficient in MongoDB, Express.js, React.js, Node.js</li>
                  <li>Frontend and Backend Development</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
