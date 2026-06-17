import "./partnershipCard.css";

function PartnershipCard({ icons, title, onClick }) {
  return (
    <button className="partnership-card" onClick={onClick}>
      <div className="partnership-card-icons">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={title}
            className="partnership-card-icon"
          />
        ))}
      </div>

      <span className="partnership-card-title">{title}</span>
    </button>
  );
}

export default PartnershipCard;