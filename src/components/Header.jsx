import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="animated">
      <a href="#" className="logo">Portfolio</a>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
