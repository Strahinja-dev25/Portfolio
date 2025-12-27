
function ProjectModal({ projects, onClose }) {
  const categoryTitle = projects[0]?.category || 'Projects';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{categoryTitle} Projects</h2>

        <div className="modal-projects-grid">
          {projects.map((project, index) => (

            <div key={index} className="project-card">
              <div className="project-image-placeholder"></div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.codeLink} className="project-link">View Code</a>
                  <a href={project.liveLink} className="project-link live-demo">Live Demo</a>
                </div>
              </div>
            </div>

          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;
