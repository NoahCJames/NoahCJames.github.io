import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <div className="portfolio-page" style={{ padding: '50px 10%' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Projects</h2>
      
      <div className="projects-grid">
        <ProjectCard 
          title="Fall Jump"
          tech="GameMaker Language (GML)"
          description="A challenging platformer developed as a high school capstone project. Features strategic movement, teleportation mechanics, and a local leaderboard."
          link="https://n04h500.itch.io/jump-fall"
          image="/Fall Jump Lobby.png" 
        />
        
      </div>
    </div>
  );
}

export default Projects;