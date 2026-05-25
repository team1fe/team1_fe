import styles from "./HomePage.module.css";

import MainHeader from "../components/mainHeader";
import MapView from "../components/mapView";
import BottomNav from "../components/bottomNav";

function HomePage() {
  return (
    <div className={styles.container}>
      <MainHeader />
      <MapView />
      <BottomNav />
    </div>
  );
}

export default HomePage;
