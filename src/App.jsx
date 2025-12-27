import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import AchievementsSection from './components/sections/AchievementsSection.jsx';
import PhilosophySection from './components/sections/PhilosophySection.jsx';
import ContactSection from './components/sections/ContactSection.jsx';

function App() {

  return (
    <div className="portfolio-app">

      <Header />
      
      <main>
        <HeroSection />

        <AboutSection />

        <ProjectsSection />

        <AchievementsSection />

        <PhilosophySection />

        <ContactSection />
      </main>

      <Footer />

    </div>
  );
}

export default App;
