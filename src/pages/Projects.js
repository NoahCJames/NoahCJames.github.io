import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  const projects = [
    {
      title: "TopDown Tactix",
      date: "In Development",
      tech: ["React", "TypeScript", "Node.js", "Socket.io", "Matter.js", "Vitest", "CI/CD"],
      description: "A high-performance, real-time soccer engine featuring server-authoritative physics and difficulty-scaled AI.",
      longDescription: "TopDown Tactix is a real-time multiplayer soccer engine engineered for deterministic stability. I developed a server-authoritative architecture using Socket.io and Matter.js to ensure a single source of truth, effectively eliminating client-side cheating. Key technical accomplishments include: implementing a custom sub-stepped physics loop for frame-rate independence, developing an AI controller with difficulty-scaled reaction delays and force multipliers, and maintaining a robust test suite with Vitest to guarantee deterministic behavior. The project utilizes a monorepo structure to share types between client and server, ensuring a strict, type-safe development environment. It is fully containerized and deployed with automated CI/CD pipelines.",
      image: process.env.PUBLIC_URL + "/TopDown-Tactix-Home.png",
      links: [
        { text: "Preview!", url: "https://topdown-tactix.vercel.app/" },
        { text: "GitHub Repo", url: "https://github.com/rhit-jamesnc/TopDown-Tactix" },
        { text: "Documentation", url: "https://github.com/rhit-jamesnc/TopDown-Tactix/tree/main/docs" }
      ]
    },
    {
      title: "Forbidden Island",
      date: "2026-05",
      tech: ["Java", "Swing"],
      description: "A logic-driven digital adaptation of the board game with a focus on Software Quality Assurance and Test Driven Development.",
      longDescription: "This project served as the primary codebase for my Software Quality Assurance course. The main challenge was managing complex game states—like the pathfinding for sinking tiles and unique player abilities—while maintaining a high degree of testability. I used a Test-Driven Development (TDD) approach, building out JUnit suites alongside the core mechanics to ensure stability. The focus was on creating a clean, modular back-end where the game logic is decoupled from the UI, making the system easy to verify and maintain.",      
      image: process.env.PUBLIC_URL + "/ForbiddenIsland.png",
      links: [
        { text: "GitHub Repository", url: "https://github.com/rhit-jamesnc/ForbiddenIsland" }
      ]
    },
    {
      title: "RoseShreddedNerds",
      date: "2026-02",
      tech: ["JavaScript", "HTML", "CSS", "SQL"],
      description: "A dedicated fitness community for Rose-Hulman students.",
      longDescription: "RoseShreddedNerds is a platform designed to bridge the gap between academics and fitness at Rose-Hulman. It provides students with a community space to track progress, join exercise classes, and encourage a healthy lifestyle within a high-intensity academic environment.",
      image: process.env.PUBLIC_URL + "/RoseShreddedNerds.png",
      links: [
        { text: "GitHub Repository", url: "https://github.com/rhit-jamesnc/RoseShreddedNerds" }
      ]
    },
    {
      title: "Full-Stack Soccer Hub & Schedule Manager",
      date: "2025-11",
      tech: ["React", "Python", "Flask", "JavaScript", "HTML", "CSS", "API"],
      description: "A full-stack sports platform featuring real-time league tracking and secure personal match scheduling.",
      longDescription: "Developed for CSSE280, this project integrates a React frontend with a Flask backend to provide a seamless experience for soccer fans. I implemented JWT-based authentication for secure user sessions and built a custom Data Service layer in Python to handle SQLite persistence. The app fetches live data from global football APIs for five major European leagues and allows users to manage a personalized match schedule with full CRUD functionality.",
      image: process.env.PUBLIC_URL + "SoccerScoredAndStandings.png"
    },
    {
      title: "Fall Jump",
      date: "2024-01",
      tech: ["GameMaker Language", "Game Design"],
      description: "A challenging platformer with strategic movement.",
      longDescription: "Developed for my high school capstone project in 2023. Fall Jump is a platformer where you climb to the top as fast as possible. It requires strategic teleportation and movement. It includes a local leaderboard to track your fastest times.",
      image: process.env.PUBLIC_URL + "/Fall Jump Lobby.png",
      links: [
        { text: "Play!", url: "https://n04h500.itch.io/jump-fall" }
      ]
    }
  ];

  const allTech = ['All', ...new Set(projects.flatMap(p => p.tech).sort())];

  const filteredProjects = projects
    .filter(p => filter === 'All' || p.tech.includes(filter))
    .sort((a, b) => {
      return sortOrder === 'newest' 
        ? new Date(b.date) - new Date(a.date) 
        : new Date(a.date) - new Date(b.date);
    });

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      
      <div className="controls-container">
        <div className="filter-group">
          {allTech.map(tech => (
            <button 
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <select 
          className="sort-select" 
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)}>
            <ProjectCard 
              title={project.title}
              date={project.date}
              tech={project.tech}
              description={project.description}
              image={project.image}
              link="#" 
            />
          </div>
        ))}
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default Projects;