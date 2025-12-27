
function ProjectCard ({ achievement, onViewCertificate }) {

    return (
        <div className="timeline-item">
            <div className="timeline-content">
                <span className="timeline-date">{achievement.date}</span>
                <h3 className="timeline-title">{achievement.title}</h3>
                <p className="timeline-issuer">{achievement.issuer}</p>
                <button 
                  className="view-certificate-btn" onClick={() => onViewCertificate(achievement.picture)}>View Certificate
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;