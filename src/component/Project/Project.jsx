import React from 'react';
import './Project.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const projects = [
  {
    number: '01',
    name: 'Green Vatika Plant Website',
    description: 'A fresh plant website with modern sections, green visual styling, and responsive layout.',
    tech: 'HTML, CSS, JavaScript',
    live: 'https://nitesh805299.github.io/Green_Vatika-plantwebsite/',
  },
  {
    number: '02',
    name: 'Landing Page',
    description: 'A responsive landing page for a product or service with clean sections and modern styling.',
    tech: 'HTML, CSS',
    live: 'https://nitesh805299.github.io/CodeSoft-task2-main/',
  },
  {
    number: '03',
    name: 'Petopia Hub',
    description: 'A responsive pet shop website for browsing products, pet breeds, and shop information.',
    tech: 'HTML, CSS',
    live: 'https://nitesh805299.github.io/TASK-1/',
  },
  {
    number: '04',
    name: 'Weather App',
    description: 'A weather project that searches cities and displays temperature, humidity, and wind details.',
    tech: 'HTML, CSS, JavaScript, API',
    live: 'https://nitesh805299.github.io/Weather-app/',
  },
];

const Project = () => {
  const openProject = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="project">
      <div className="project-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="projectCard">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <span className="project-number">{project.number}</span>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p className="tech"><span>Tech:</span> {project.tech}</p>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => openProject(event, project.live)}
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Project;
