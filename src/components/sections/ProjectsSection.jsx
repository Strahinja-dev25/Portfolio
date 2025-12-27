import { useState } from 'react';
import { highProjects } from '../../data/projectsData.js';
import { lowProjects} from '../../data/projectsData.js';
import ProjectModal from '../common/Modals/ProjectModal.jsx';
import ProjectCard from '../common/Cards/ProjectCard.jsx';

function ProjectsSection () {
    const [modalProjects, setModalProjects] = useState([]);

    const openModal = (category) => {
        const projectsToShow = lowProjects.filter((project) => project.category === category);
        setModalProjects(projectsToShow);
    };

    const closeModal = () => {
        setModalProjects([]);
    };

    return (
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>
          
          <div className="projects-grid">
            <ProjectCard project={highProjects[0]} />
            <ProjectCard project={highProjects[1]} />

            {/* Ostalo je prazno tu ce tek doci projekti kada se urade. Za sada samo template */}
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
