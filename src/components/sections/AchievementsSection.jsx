import { useState } from 'react';
import '../../assets/styles/sections/Achievements.css';
import CertificateModal from '../common/Modals/CertificateModal.jsx';
import { allCertificates } from '../../data/certificatesData.js';
import AchievementCard from '../common/Cards/AchievementCard.jsx';

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
          
            {allCertificates.map(certificate => (
              <AchievementCard key={certificate.id} achievement={certificate} onViewCertificate={openCertificateModal} />
            ))}

          </div>

          {/* Modal za prikaz sertifikata */}
          {certificateImage && (
            <CertificateModal imageUrl={certificateImage} onClose={closeCertificateModal} />
          )}
        </section>
    );
}

export default AchievementsSection;
