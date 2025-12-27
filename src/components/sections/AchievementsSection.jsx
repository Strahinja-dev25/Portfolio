import { useState } from 'react';
import CertificateModal from '../common/Modals/CertificateModal.jsx';

function AchievementsSection () {
    const [certificateImage, setCertificateImage] = useState(null);

    const openCertificateModal = (imageUrl) => {
        setCertificateImage(imageUrl);
    };

    const closeCertificateModal = () => {
        setCertificateImage(null);
    };

    return (
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
                  className="view-certificate-btn" onClick={() => openCertificateModal('../assets/certifications/Sertifikat FreeCodeCamp - JavaScript Algorithms and Data Structures.jpg')}>View Certificate
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
                  className="view-certificate-btn" onClick={() => openCertificateModal('../assets/certifications/Sertifikat FreeCodeCamp - Responsive Web Design.jpg')}>View Certificate
                </button>
              </div>
            </div>
            
            {/* Ovde kasnije dodavati još stavki po istom principu */}

          </div>

          {/* Modal za prikaz sertifikata */}
          {certificateImage && (
            <CertificateModal imageUrl={certificateImage} onClose={closeCertificateModal} />
          )}
        </section>
    );
}

export default AchievementsSection;
