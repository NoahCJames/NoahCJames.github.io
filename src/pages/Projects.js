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
      title: "Topdown Tactix",
      date: "In Development",
      buttonText: "GitHub Repository",
      tech: ["React", "Node.js", "Socket.io", "Matter.js", "TypeScript", "Vite", "Git"],
      description: "A real-time, 1v1 multiplayer soccer engine featuring custom physics and automated CI/CD workflows.",
      longDescription: "TopDown Tactix is an ongoing full-stack engineering project built to demonstrate proficiency in real-time game architecture. I engineered a custom 2D physics engine using Matter.js, implementing deterministic boundary constraints and collision detection. To handle real-time state synchronization, I built a monorepo architecture with a React frontend and a Node.js/Socket.io backend. A major focus of this project is 'production-readiness': I implemented custom GitHub Kanban workflows for automated PR lifecycle tracking, configured Vite for efficient bundling, and managed deployment through Vercel and Render. The project highlights my ability to bridge complex client-side rendering with server-side logic and scalable infrastructure.",
      link: "https://github.com/rhit-jamesnc/TopDown-Tactix"
    },
    {
      title: "Forbidden Island",
      date: "2026-05",
      buttonText: "GitHub Repository",
      tech: ["Java", "Swing"],
      description: "A logic-driven digital adaptation of the board game with a focus on Software Quality Assurance and Test Driven Development.",
      longDescription: "This project served as the primary codebase for my Software Quality Assurance course. The main challenge was managing complex game states—like the pathfinding for sinking tiles and unique player abilities—while maintaining a high degree of testability. I used a Test-Driven Development (TDD) approach, building out JUnit suites alongside the core mechanics to ensure stability. The focus was on creating a clean, modular back-end where the game logic is decoupled from the UI, making the system easy to verify and maintain.",      
      link: "https://github.com/rhit-jamesnc/ForbiddenIsland",
      image: process.env.PUBLIC_URL + "/ForbiddenIsland.png"
    },
    {
      title: "RoseShreddedNerds",
      date: "2026-02",
      buttonText: "GitHub Repository",
      tech: ["JavaScript", "HTML", "CSS", "SQL"],
      description: "A dedicated fitness community for Rose-Hulman students.",
      longDescription: "RoseShreddedNerds is a platform designed to bridge the gap between academics and fitness at Rose-Hulman. It provides students with a community space to track progress, join exercise classes, and encourage a healthy lifestyle within a high-intensity academic environment.",
      link: "https://github.com/rhit-jamesnc/RoseShreddedNerds",
      image: process.env.PUBLIC_URL + "/RoseShreddedNerds.png" 
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
      buttonText: "Play!",
      tech: ["GameMaker Language", "Game Design"],
      description: "A challenging platformer with strategic movement.",
      longDescription: "Developed for my high school capstone project in 2023. Fall Jump is a platformer where you climb to the top as fast as possible. It requires strategic teleportation and movement. It includes a local leaderboard to track your fastest times.",
      link: "https://n04h500.itch.io/jump-fall",
      image: process.env.PUBLIC_URL + "/Fall Jump Lobby.png"
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