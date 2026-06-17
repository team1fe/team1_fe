import "./storeListPage.css";

import RestaurantCard from "./restaurantCard";

function StoreListPage({ title, stores }) {
  return (
    <main className="store-list-page">
      <h1 className="store-list-title">{title}</h1>

      <section className="store-list">
        {stores.map((store) => (
          <RestaurantCard
            key={store.id}
            image={store.image}
            name={store.name}
            category={store.category}
            address={store.address}
          />
        ))}
      </section>
    </main>
  );
}

export default StoreListPage;