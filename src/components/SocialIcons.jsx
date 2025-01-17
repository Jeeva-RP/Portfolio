import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {/* Replace the href="#" with the actual URLs */}
      <a href="https://github.com/Jeeva-RP" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/Jeeva8087" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/Jeevarp" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
};

export default SocialIcons;
