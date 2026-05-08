import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        
        <img src={project.image} alt={project.title} className="modal-image" />
        
        <div className="modal-body">
          <h2>{project.title}</h2>
          <p className="modal-tech">Built with: {project.tech}</p>
          <div className="modal-description">
            <p>{project.longDescription}</p>
          </div>
          
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="play-button">
              {project.buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;