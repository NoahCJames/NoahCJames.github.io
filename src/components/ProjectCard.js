import './ProjectCard.css';

function ProjectCard({ title, date, description, tech, link, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="image-placeholder">Code Only</div>
        )}
      </div>
      <div className="project-info">
        <div className="project-header">
          <h3>{title}</h3>
          <span className="project-date">{date}</span>
        </div>
        <p className="tech-stack"><strong>Tech:</strong> {tech}</p>
        <p>{description}</p>
        <div className="project-button">View Project</div>
      </div>
    </div>
  );
}

export default ProjectCard;