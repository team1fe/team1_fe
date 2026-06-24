import { useEffect, useState } from "react";

import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";
import BackButton from "../components/backButton";
import StoreListPage from "../components/storeListPage";

import restaurantImage from "../../../assets/jangsuImage.svg";

import { getStores } from "../../../api/storeApi";

import styles from "./MyPage.module.css";

function Department() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchDepartmentStores = async () => {
      try {
        const data = await getStores({
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
        console.error("학과 제휴 매장 조회 실패:", error);
        setStores([]);
      }
    };

    fetchDepartmentStores();
  }, []);

  return (
    <div className={styles.screen}>
      <MainHeader />
      <BackButton />

      <StoreListPage title="학과(부) 제휴" stores={stores} />

      <BottomNav />
    </div>
  );
}

export default Department;
