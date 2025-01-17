import React from "react";
import SocialIcons from "./SocialIcons";
import homeImg from "../assets/DSC-75801-removebg-preview.png";  // Your profile image
import resume from "../assets/resume.pdf";  // Add your resume file here

const Home = () => {
  return (
    <section className="home animated">
      <div className="home-detail">
        <h1>Jeeva R P</h1>
        <h2>Electronics and Instrumentation Engineer!</h2>
        <p>
          I'm a passionate Frontend Developer dedicated to creating visually appealing and user-friendly web applications. With a strong foundation in modern technologies like React and CSS, I aim to bring innovative ideas to life. I thrive on solving complex problems and ensuring seamless user experiences. When I'm not coding, I enjoy exploring design trends and improving my skillset. Let's collaborate to turn ideas into reality!
        </p>
        <div className="download-social">
          {/* Update the link to your resume file */}
          <a href={resume} className="btn" download>
            Download CV
          </a>
          <SocialIcons />
        </div>
      </div>
      <div className="home-img">
        <div className="img-box">
          <img src={homeImg} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
