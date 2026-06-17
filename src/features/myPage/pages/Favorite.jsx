import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";
import BackButton from "../components/backButton";
import StoreListPage from "../components/storeListPage";

import restaurantImage from "../../../assets/jangsuImage.svg";

import styles from "./MyPage.module.css";

const stores = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  image: restaurantImage,
  name: "장수국수",
  category: "국수",
  address: "서울 노원구 광운로 27 2층",
}));

function Favorite() {
  return (
    <div className={styles.screen}>
      <MainHeader />
      <BackButton />

      <StoreListPage title="즐겨찾기" stores={stores} />

      <BottomNav />
    </div>
  );
}

export default Favorite;