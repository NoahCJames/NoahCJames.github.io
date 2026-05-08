import './ProjectCard.css';

function ProjectCard({ title, description, tech, link, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p className="tech-stack"><strong>Tech:</strong> {tech}</p>
        <p>{description}</p>
        <div className="project-button">View Project</div>
      </div>
    </div>
  );
}

export default ProjectCard;