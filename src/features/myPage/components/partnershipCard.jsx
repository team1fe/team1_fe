import "./partnershipCard.css"

function PartnershipCard({ icon, title, onClick }) {
  return (
    <button className="partnership-card" onClick={onClick}>
      {icon && <img src={icon} alt="" />}
      <span>{title}</span>
    </button>
  );
}

export default PartnershipCard;