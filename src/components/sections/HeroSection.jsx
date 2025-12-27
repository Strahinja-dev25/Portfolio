import GitHubIcon from '../common/icons/GitHubIcon.jsx';
import LinkedInIcon from '../common/icons/LinkedInIcon.jsx';
import InstagramIcon from '../common/icons/InstagramIcon.jsx';

function HeroSection () {
    return (
        <section id="pocetna" className="hero-section">
          <h1 className="hero-title">
            Strahinja Kovačević
          </h1>

          <div className="typing-container">
            <p className="hero-subtitle typed-text">Web Developer</p>
          </div>

          <div className="hero-links">
            <a href="https://github.com/Strahinja-dev25" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/strahinja-kovacevic-81140b399" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"><LinkedInIcon /></a>
            <a href="https://www.instagram.com/strahinja___k/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile"><InstagramIcon /></a>
          </div>
        </section>
    );
}

export default HeroSection;
