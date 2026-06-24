import { useEffect, useState } from "react";

import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";
import BackButton from "../components/backButton";
import StoreListPage from "../components/storeListPage";

import restaurantImage from "../../../assets/jangsuImage.svg";

import { getMyFavorites } from "../../../api/storeApi";

import styles from "./MyPage.module.css";

function Favorite() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchFavoriteStores = async () => {
      try {
        const data = await getMyFavorites({
          page: 0,
          size: 20,
        });

        const mappedStores = (data.content || []).map((store) => ({
          id: store.storeId,
          image: store.thumbnailUrl || restaurantImage,
          name: store.name,
          category: store.description || "",
          address: store.address,
        }));

        setStores(mappedStores);
      } catch (error) {
        console.error("즐겨찾기 매장 조회 실패:", error);
        setStores([]);
      }
    };

    fetchFavoriteStores();
  }, []);

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
