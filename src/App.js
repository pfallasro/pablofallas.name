import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1>John Doe</h1>
        <h3>DevOps Engineer & Software Developer</h3>
      </header>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I am a DevOps Engineer with a passion for designing scalable cloud solutions,
          automating infrastructure, and implementing CI/CD pipelines.
          I love working with AWS, Docker, Kubernetes, and other cloud-native tools.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>AWS (EC2, S3, Lambda, CloudFormation, etc.)</li>
          <li>CI/CD (Jenkins, GitLab, GitHub Actions)</li>
          <li>Docker & Kubernetes</li>
          <li>Terraform & CloudFormation</li>
          <li>Python & Bash Scripting</li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1: Automated CI/CD Pipeline</h3>
          <p>
            A pipeline built with Jenkins and Docker that automatically tests and deploys 
            code to AWS EC2 instances.
          </p>
        </div>
        <div className="project">
          <h3>Project 2: Kubernetes Deployment</h3>
          <p>
            Deployed a microservices application to a Kubernetes cluster, focusing on 
            scalability and resilience.
          </p>
        </div>
      </section>

      <footer className="footer-section">
        <p>© 2025 John Doe | <a href="mailto:john@example.com">john@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;