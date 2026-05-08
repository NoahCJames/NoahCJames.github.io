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
        <a href={link} target="_blank" rel="noreferrer" className="project-button">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;