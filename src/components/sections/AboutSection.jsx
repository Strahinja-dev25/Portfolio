import SkillCard from '../common/Cards/SkillCard.jsx';

function AboutSection () {
    return (
        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            
            {/* LEVI BLOK: Slika i Tekst */}
            <div className="about-left">
              <div className="profile-picture-placeholder"></div>
              
              <p className="about-text">
                A Web Developer focused on building functional, scalable, and visually appealing solutions. I have experience working with
                modern <b>Front-End</b>and <b>Back-End</b> technologies, from designing user interfaces to implementing complex business logic.
                I write clean code and optimize for performance, always thinking ahead about how the application will scale.
                <br/><br/>
                My vision extends beyond Web Development. I am passionate about growing into a <b>Software Engineering</b> role, working on complex
                systems, application architecture, and solutions that have a real-world impact. If you're looking for someone who doesn't just complete
                tasks, but actively contributes to the growth of the product and the team, I am ready to take on that responsibility.
              </p>
            </div>

            {/* ===== DESNI BLOK: Veštine ===== */}
            <div className="about-right">
                <h3 className="skills-title">My Tech Stack</h3>
                
                <SkillCard skillName="HTML5" skillPercentage="95"
                    skillDescription="Building semantic, accessible structures with a focus on SEO."
                />

                <SkillCard skillName="CSS3" skillPercentage="90"
                    skillDescription="Designing responsive and visually engaging layouts."
                />

                <SkillCard skillName="JavaScript" skillPercentage="90"
                    skillDescription="Crafting dynamic user experiences (React.js, Next.js, Node.js)."
                />

                <SkillCard skillName="SQL" skillPercentage="80"
                    skillDescription="Designing relational database schemas and writing queries (MySQL, OracleSQL)."
                />

                <SkillCard skillName="NoSQL (MongoDB)" skillPercentage="70"
                    skillDescription="Utilizing NoSQL databases for flexible data storage."
                />

                <SkillCard skillName="Version Control (Git + GitHub)" skillPercentage="85"
                    skillDescription="Managing parallel development and teamwork."
                />

                <h3 className="skills-title bottom-skills-title">Software Engineering Principles</h3>
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
