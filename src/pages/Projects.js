import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Fall Jump",
      tech: "GameMaker Language (GML)",
      description: "A challenging platformer with strategic movement.",
      longDescription: "Developed for my high school capstone project in 2023. Fall Jump is a platformer where you climb to the top as fast as possible. It requires strategic teleportation and movement. It includes a local leaderboard to track your fastest times.",
      link: "https://n04h500.itch.io/jump-fall",
      image: process.env.PUBLIC_URL + "/Fall Jump Lobby.png"
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