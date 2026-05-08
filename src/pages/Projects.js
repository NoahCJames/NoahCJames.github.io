import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Fall Jump",
      buttonText: "Play!",
      tech: "GameMaker Language (GML)",
      description: "A challenging platformer with strategic movement.",
      longDescription: "Developed for my high school capstone project in 2023. Fall Jump is a platformer where you climb to the top as fast as possible. It requires strategic teleportation and movement. It includes a local leaderboard to track your fastest times.",
      link: "https://n04h500.itch.io/jump-fall",
      image: process.env.PUBLIC_URL + "/Fall Jump Lobby.png"
    },
    {
      title: "RoseShreddedNerds",
      tech: "JavaScript, HTML, CSS, SQL",
      description: "A dedicated fitness community for Rose-Hulman students.",
      longDescription: "RoseShreddedNerds is a platform designed to bridge the gap between academics and fitness at Rose-Hulman. It provides students with a community space to track progress, join exercise classes, and encourage a healthy lifestyle within a high-intensity academic environment.",
      link: null,
      image: process.env.PUBLIC_URL + "/RoseShreddedNerds.png" 
    }
  ];

  return (
    <div className="projects-page" style={{ padding: '50px 10%' }}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>My Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} onClick={() => setSelectedProject(project)}>
            <ProjectCard 
              title={project.title}
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