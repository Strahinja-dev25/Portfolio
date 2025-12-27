
function CertificateModal({ imageUrl, onClose }) {
  if (!imageUrl) return null;

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