
function AboutSection () {
    return (
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
    );
}

export default AboutSection;