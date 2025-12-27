
function PhilosophySection () {
    return (
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

            {/* Ovde dodavati jos kartica ako je potrebno */}

          </div>
        </section>
    );
}

export default PhilosophySection;
