import "./restaurantCard.css";

function RestaurantCard({ name, category, address, imageUrl, onClick }) {
  return (
    <button className="restaurant-card" onClick={onClick}>
      <img className="restaurant-image" src={imageUrl} alt={name} />

      <div className="restaurant-info">
        <div className="top-row">
          <div className="restaurant-name">{name}</div>
          <div className="restaurant-category">{category}</div>
        </div>

        <div className="restaurant-address">{address}</div>
      </div>
    </button>
  );
}

export default RestaurantCard;
