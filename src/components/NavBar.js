// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css'; // optional separate CSS file for nav

function NavBar() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-icon">P</span>
        <span className="logo-text">Pablo Fallas</span>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
