

function ProjectCard ({ project }) {

    return (
        <div className="project-card">
            <div className="project-image-placeholder"></div>

            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.codeLink} className="project-link">View Code</a>
                  <a href={project.liveLink} className="project-link live-demo">Live Demo</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;