import { useState } from 'react';
import { allProjects } from './projectsData.js';
import ProjectModal from './ProjectModal.jsx';
import { validateForm } from './formValidator.js';
import { sendEmail } from './emailService.js';
import CertificateModal from './CertificateModal.jsx';

import GitHubIcon from './icons/GitHubIcon.jsx';
import LinkedInIcon from './icons/LinkedInIcon.jsx';
import InstagramIcon from './icons/InstagramIcon.jsx';
// src/App.jsx

function App() {
                                  // 1. Svi import-i idu na sam vrh fajla
  const [modalProjects, setModalProjects] = useState([]); // Pamti listu projekata za modal
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formMessage, setFormMessage] = useState('');


  //// NOVI STATE za modal sertifikata
  const [certificateImage, setCertificateImage] = useState(null); // Pamti putanju do slike

                                  // 2. Definicija svih "pomoćnih" funkcija ide posle stanja
  const openModal = (category) => {
    const projectsToShow = allProjects.filter((project) => project.category === category); // Filtriramo sve projekte i ostaju oni kliknuti
    setModalProjects(projectsToShow); // Čuvamo filtriranu listu u "memoriju"
  };

  const closeModal = () => {
    setModalProjects([]); // Praznimo listu da bismo zatvorili modal
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm(formData);
    if (validationError) {
      setFormMessage(validationError);
      return;
    }
    
    setFormMessage('Sending...'); // Obavestimo korisnika da se šalje

    // === PRAVO SLANJE EMAIL-A ===
    sendEmail(formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormMessage('Thank you! Your message has been sent.');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        setFormMessage('Oops! Something went wrong. Please try again.');
      });
  };


  // NOVE FUNKCIJE za modal sertifikata
  const openCertificateModal = (imageUrl) => {
    setCertificateImage(imageUrl);
  };

  const closeCertificateModal = () => {
    setCertificateImage(null);
  };

  return (
    <div className="portfolio-app">

      <header className="main-header">
        {/* Pravljenje ikonice za gornji levi ugao */}
        <a href="#" className="logo-link">
          <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#4fd1c5", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#63b3ed", stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M32 0L59.7128 16V48L32 64L4.28719 48V16L32 0Z" fill="url(#grad1)"/>
            <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="Consolas, 'Courier New', monospace" fontSize="40" fontWeight="900" fill="#0B1120">SK</text>
          </svg>
        </a>

        <nav className="main-nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#achievements">Achievements</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="pocetna" className="hero-section">
          <h1 className="hero-title">
            Strahinja Kovačević
          </h1>
          <div className="typing-container">
            <p className="hero-subtitle typed-text">Web Developer</p>
          </div>
          <div className="hero-links">
            <a href="https://github.com/Strahinja-dev25" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><GitHubIcon /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><LinkedInIcon /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><InstagramIcon /></a>
          </div>
        </section>


        {/* ===== ABOUT ME SECTION ===== */}
        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            
            {/* LEVI BLOK: Slika i Tekst */}
            <div className="about-left">
              <div className="profile-picture-placeholder"></div>
              <p className="about-text">
                A Web Developer focused on building functional, scalable, and visually appealing solutions. I have experience working with modern <b>Front-End</b> and <b>Back-End</b> technologies, from designing user interfaces to implementing complex business logic. I write clean code and optimize for performance, always thinking ahead about how the application will scale.
                <br/><br/>
                My vision extends beyond Web Development. I am passionate about growing into a <b>Software Engineering</b> role, working on complex systems, application architecture, and solutions that have a real-world impact. If you're looking for someone who doesn't just complete tasks, but actively contributes to the growth of the product and the team, I am ready to take on that responsibility.
              </p>
            </div>

            {/* ===== DESNI BLOK: Veštine ===== */}
            <div className="about-right">
                <h3 className="skills-title">My Tech Stack</h3>
                
                {/* Skill 1: HTML5 */}
                <div className="skill-box">
                    <div className="skill-header">
                        <span className="skill-name">HTML5</span>
                        <span className="skill-percentage">95%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '95%'}}></div>
                    </div>
                    <div className="skill-description-box">
                        <p className="skill-description-text">Building semantic, accessible structures with a focus on SEO.</p>
                    </div>
                </div>

                {/* Skill 2: CSS3 */}
                <div className="skill-box">
                    <div className="skill-header">
                        <span className="skill-name">CSS3</span>
                        <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                    <div className="skill-description-box">
                        <p className="skill-description-text">Designing responsive and visually engaging layouts.</p>
                    </div>
                </div>
                
                {/* Skill 3: JavaScript */}
                <div className="skill-box">
                    <div className="skill-header">
                        <span className="skill-name">JavaScript</span>
                        <span className="skill-percentage">90%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '90%'}}></div>
                    </div>
                    <div className="skill-description-box">
                        <p className="skill-description-text">Crafting dynamic user experiences (React.js, Node.js).</p>
                    </div>
                </div>

                {/* Skill 4: SQL */}
                <div className="skill-box">
                    <div className="skill-header">
                        <span className="skill-name">SQL</span>
                        <span className="skill-percentage">80%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '80%'}}></div>
                    </div>
                    <div className="skill-description-box">
                        <p className="skill-description-text">Designing relational database schemas and writing queries.</p>
                    </div>
                </div>

                {/* Skill 5: MongoDB */}
                <div className="skill-box">
                    <div className="skill-header">
                        <span className="skill-name">MongoDB</span>
                        <span className="skill-percentage">70%</span>
                    </div>
                    <div className="skill-bar">
                        <div className="skill-level" style={{width: '70%'}}></div>
                    </div>
                    <div className="skill-description-box">
                        <p className="skill-description-text">Utilizing NoSQL databases for flexible data storage.</p>
                    </div>
                </div>

                {/* Principi ostaju isti */}
                <h3 className="skills-title">Software Engineering Principles</h3>
                <div className="principles-container">
                    <span className="principle-tag">Data Structures & Algorithms</span>
                    <span className="principle-tag">Object-Oriented Programming</span>
                    <span className="principle-tag">Clean Code Principles</span>
                    <span className="principle-tag">Git & Version Control</span>
                </div>
            </div>

          </div>
        </section>


        {/* ===== PROJECTS SECTION ===== */}
        <section id="projects" className="projects-section">
          <h2 className="section-title">My Projects</h2>
          
          {/* Featured Projects Gallery */}
          <div className="projects-grid">
            
            {/* PRIMER KARTICE PROJEKTA (kasnije ćete dodati još 5) */}
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

            {/* Ovde će doći još 5 kartica... za sada ih ostavljamo prazne */}
            {/* Primer prazne kartice da vidimo layout */}
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
        </section>

        {/* ===== ACHIEVEMENTS SECTION ===== */}
        <section id="achievements" className="achievements-section">
          <h2 className="section-title">Achievements & Certificates</h2>
          <div className="timeline-container">

            {/* PRIMER STAVKE 1 (Stavka sa desne strane) */}
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2024</span>
                <h3 className="timeline-title">Advanced React Course</h3>
                <p className="timeline-issuer">Udemy</p>
                <button 
                  className="view-certificate-btn" onClick={() => openCertificateModal('/certificates/advanced-react.jpg')}>View Certificate
                </button>
              </div>
            </div>

            {/* PRIMER STAVKE 2 (Stavka sa leve strane) */}
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2023</span>
                <h3 className="timeline-title">JavaScript Algorithms & Data Structures</h3>
                <p className="timeline-issuer">freeCodeCamp</p>
                <button 
                  className="view-certificate-btn" onClick={() => openCertificateModal('/certificates/javaScript-algorithms-dataStructures.jpg')}>View Certificate
                </button>
              </div>
            </div>
            
            {/* PRIMER STAVKE 3 (Stavka sa desne strane) */}
            <div className="timeline-item">
              <div className="timeline-content">
                <span className="timeline-date">2023</span>
                <h3 className="timeline-title">Responsive Web Design</h3>
                <p className="timeline-issuer">freeCodeCamp</p>
                <button 
                  className="view-certificate-btn" onClick={() => openCertificateModal('/certificates/responsive-web-design.jpg')}>View Certificate
                </button>
              </div>
            </div>
            
            {/* Ovde kasnije dodavati još stavki po istom principu */}

          </div>
        </section>


        {/* ===== PHILOSOPHY SECTION ===== */}
        <section id="philosophy" className="philosophy-section">
          <h2 className="section-title">My Philosophy</h2>
          <div className="philosophy-cards-container">
            
            {/* KARTICA 1: Clean & Readable Code */}
            <div className="philosophy-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="card-title">Clean & Readable Code</h3>
              <p className="card-text">
                I believe the best code is the one that's <b>easy to understand</b>. I focus on writing code that is sustainable and clear, not just for myself, but for my future colleagues. True quality lies in <b>teamwork</b>.
              </p>
            </div>

            {/* KARTICA 2: User-Centric & Problem Solving */}
            <div className="philosophy-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="card-title">User-Centric & Problem Solving</h3>
              <p className="card-text">
                My goal is to understand the 'why' behind every task to deliver solutions that exceed expectations. I build every project with the <b>end-user</b> in mind, aiming for intuitive, engaging, and valuable digital experiences.
              </p>
            </div>

            {/* KARTICA 3: Continuous Growth */}
            <div className="philosophy-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <h3 className="card-title">Continuous Growth</h3>
              <p className="card-text">
                In a tech world that evolves daily, I am committed to continuous growth. My passion for learning drives me to <b>constantly improve</b>, master new technologies, and stay updated with the best practices to <b>solve any given problem</b>.
              </p>
            </div>

          </div>
        </section>


        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleFormChange} />
              <input type="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleFormChange} />
            </div>
            <textarea placeholder="Your Message" rows="6" name="message" value={formData.message} onChange={handleFormChange}></textarea>
            
            {/* Prikazivanje poruke korisniku */}
            {formMessage && <p className="form-status-message">{formMessage}</p>}

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>


        {/* ===== FOOTER SECTION ===== */}
        <footer className="footer">
          <p>© 2025 Strahinja Kovačević. All Rights Reserved.</p>
        </footer>


      </main>
      {/* Modal za prikaz sertifikata */}
      {certificateImage && (
          <CertificateModal imageUrl={certificateImage} onClose={closeCertificateModal} />
      )}

      {/* Modal za projekte (Prikazujemo SAMO AKO lista NIJE PRAZNA)*/}
      {modalProjects.length > 0 && (
        <ProjectModal projects={modalProjects} onClose={closeModal} />
      )}

    </div>
  );
}

export default App;