import { useState } from 'react';
import { allProjects } from '../../data/projectsData.js';
import ProjectModal from '../common/Modals/ProjectModal.jsx';

function ProjectsSection () {
    const [modalProjects, setModalProjects] = useState([]);

    const openModal = (category) => {
        const projectsToShow = allProjects.filter((project) => project.category === category);
        setModalProjects(projectsToShow);
    };

    const closeModal = () => {
        setModalProjects([]);
    };

    return (
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>
          
          <div className="projects-grid">
            
            {/* PRIMER KARTICE PROJEKTA (kasnije će se dodati još 5) */}
            <div className="project-card">
              <div className="project-image-placeholder"></div>
              <div className="project-content">
                <h3 className="project-title">Kanban Task Manager</h3>
                <p className="project-description">
                  A full-stack task management application inspired by Trello, with drag & drop functionality.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                  <span className="tag">CSS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Code</a>
                  <a href="#" className="project-link live-demo">Live Demo</a>
                </div>
              </div>
            </div>

            {/* Ovde će doći još 5 kartica... za sada ostavljeno prazno */}
            {/* Primer prazne kartice da se vidi layout */}
            <div className="project-card-empty"></div>
            <div className="project-card-empty"></div>
            <div className="project-card-empty"></div>
            <div className="project-card-empty"></div>
            <div className="project-card-empty"></div>

          </div>

          {/* Other Projects Categories */}
          <div className="category-section">
            <h3 className="category-title">Explore More Projects</h3>
            <div className="category-buttons">
              <button className="category-button" onClick={() => openModal('Easy')}>Easy Projects</button>
              <button className="category-button" onClick={() => openModal('Medium')}>Medium Projects</button>
              <button className="category-button" onClick={() => openModal('Hard')}>Hard Projects</button>
            </div>
          </div>

          {/* Modal za prikaz projekata */}
          {modalProjects.length > 0 && (
            <ProjectModal projects={modalProjects} onClose={closeModal} />
          )}
        </section>
    );
}

export default ProjectsSection;
