import "./HomePage.css";

import MainHeader from "../components/mainHeader";
import MapView from "../components/mapView";
import BottomNav from "../components/bottomNav";

function HomePage() {
  return (
    <div className="container">
      <MainHeader />
      <MapView />
      <BottomNav />
    </div>
  );
}

export default HomePage;
