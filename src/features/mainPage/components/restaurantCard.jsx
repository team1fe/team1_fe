import "./restaurantCard.css";

function RestaurantCard({ name, category, address }) {
  return (
    <div className="restaurant-card">
      <div className="restaurant-image"></div>

      <div className="restaurant-info">
        <div className="top-row">
          <div className="restaurant-name">{name}</div>
          <div className="restaurant-category">{category}</div>
        </div>

        <div className="restaurant-address">{address}</div>
      </div>
    </div>
  );
}

export default RestaurantCard;
