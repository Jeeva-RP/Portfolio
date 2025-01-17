import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects animated">
      <div className="projects-detail">
        <h1>My Projects</h1>

        <div className="project-category">
          <h2>Hardware Projects</h2>

          <div className="project-list">
            {/* Hydraulic Jerk Project */}
            <div className="project">
              <div className="project-content">
                <img
                  src="./assets\1736831297028.jpg"
                  alt="Hydraulic Jerk"
                  className="project-image"
                />
                <h3>Hydraulic Jerk</h3>
                <p>Demonstrating the principles of hydraulics and forces.</p>
              </div>
            </div>
            {/* Real-Time Fire Detection Project */}
            <div className="project">
              <div className="project-content">
                <img
                  src="React Portfolio\React-Portfolio\src\assets\background.jpg"
                  alt="Fire Detection"
                  className="project-image"
                />
                <h3>Real-Time Fire Detection</h3>
                <p>Alerting for fire hazards in real-time.</p>
              </div>
            </div>
            {/* Automatic Dusk Flipper Machine */}
            <div className="project">
              <div className="project-content">
                <img
                  src="/path/to/dusk-flipper-image.jpg"
                  alt="Dusk Flipper Machine"
                  className="project-image"
                />
                <h3>Automatic Dusk Flipper Machine</h3>
                <p>Automating dusk flipping for efficient control.</p>
              </div>
            </div>
          </div>

          <h2>Software Projects</h2>
          <div className="project-list">
            {/* Weather App */}
            <div className="project">
              <div className="project-content">
                <img
                  src="/path/to/weather-app-image.jpg"
                  alt="Weather App"
                  className="project-image"
                />
                <h3>Weather App</h3>
                <p>Real-time weather data at your fingertips.</p>
              </div>
            </div>
            {/* Recipe Finder */}
            <div className="project">
              <div className="project-content">
                <img
                  src="/path/to/recipe-finder-image.jpg"
                  alt="Recipe Finder"
                  className="project-image"
                />
                <h3>Recipe Finder</h3>
                <p>Find recipes based on available ingredients.</p>
              </div>
            </div>
            {/* Portfolio */}
            <div className="project">
              <div className="project-content">
                <img
                  src="/path/to/portfolio-image.jpg"
                  alt="Portfolio"
                  className="project-image"
                />
                <h3>Portfolio</h3>
                <p>Your go-to place for all things about me.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
