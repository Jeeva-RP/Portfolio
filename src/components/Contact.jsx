import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact animated">
      <div className="contact-form">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Personal Details */}
      <div className="personal-details">
        <h2>Personal Details</h2>
        <ul>
          <li>
            <FaPhone style={{ marginRight: "10px" }} />
            <span>+91 9842623963</span>
          </li>
          <li>
            <FaLinkedin style={{ marginRight: "10px" }} />
            <a href="https://www.linkedin.com/Jeeva8087" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <FaGithub style={{ marginRight: "10px" }} />
            <a href="https://github.com/Jeeva-RP" target="_blank" rel="noopener noreferrer">
              GitHub Profile
            </a>
          </li>
          <li>
            <FaEnvelope style={{ marginRight: "10px" }} />
            <span>jeevarp.22eie@kongu.edu</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;