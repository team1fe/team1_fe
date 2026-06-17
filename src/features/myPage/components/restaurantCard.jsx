import "./restaurantCard.css";

function RestaurantCard({ image, name, category, address }) {
  return (
    <article className="restaurant-card">
      <img src={image} alt={name} className="restaurant-card-image" />

      <div className="restaurant-card-info">
        <div className="restaurant-card-title-row">
          <h2>{name}</h2>
          <span>{category}</span>
        </div>

        <p>{address}</p>
      </div>
    </article>
  );
}

export default RestaurantCard;