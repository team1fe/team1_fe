import MainHeader from "./MainHeader";
import BackButton from "./BackButton";
import RestaurantList from "./RestaurantList";
import BottomNav from "./BottomNav";

import "./StoreListPage.css";

function StoreListPage({ title }) {
  return (
    <div className="store-list-screen">
      <MainHeader />

      <main className="store-list-content">
        <div className="store-list-title-row">
          <h1>{title}</h1>
          <BackButton />
        </div>

        <RestaurantList />
      </main>

      <BottomNav />
    </div>
  );
}

export default StoreListPage;