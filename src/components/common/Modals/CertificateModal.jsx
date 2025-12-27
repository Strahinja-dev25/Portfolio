import { useEffect } from 'react';

function CertificateModal ({ imageUrl, onClose }) {
    if (!imageUrl) return null;

    useEffect(() => {
      document.body.style.overflow = 'hidden';

      return () => document.body.style.overflow = 'auto';
    }, []);

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>&times;</button>
          <img src={imageUrl} alt="Certificate Preview" />
        </div>
      </div>
    );
}

export default CertificateModal;
