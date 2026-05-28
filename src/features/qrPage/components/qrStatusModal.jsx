import "./qrStatusModal.css";

function QrStatusModal({ characterImg, title, description, onClose }) {
  return (
    <div className="qr-status-modal">
      <button className="qr-status-close" onClick={onClose}>
        ×
      </button>

      <img
        className="qr-status-character"
        src={characterImg}
        alt=""
      />

      <div className="qr-status-text-box">
        <h1>{title}</h1>

        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default QrStatusModal;