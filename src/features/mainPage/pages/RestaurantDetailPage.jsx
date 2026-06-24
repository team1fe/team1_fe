import "./RestaurantDetailPage.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";

import {
  addFavorite,
  deleteFavorite,
  getStoreDetail,
} from "../../../api/storeApi";

import backButton from "../../../assets/backButton.svg";
import fav1 from "../../../assets/fav1.svg";
import fav2 from "../../../assets/fav2.svg";
import detailCh from "../../../assets/detailCh.svg";
import jangsuImage from "../../../assets/jangsuImage.svg";

function RestaurantDetailPage() {
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchStoreDetail = async () => {
      try {
        const data = await getStoreDetail(restaurantId);

        console.log("매장 상세 응답:", data);

        setRestaurant(data);
        setIsFavorite(data.isFavorite);
      } catch (error) {
        console.error("매장 상세 조회 실패:", error);
      }
    };

    fetchStoreDetail();
  }, [restaurantId]);

  const handleFavoriteClick = async () => {
    try {
      const data = isFavorite
        ? await deleteFavorite(restaurantId)
        : await addFavorite(restaurantId);

      setIsFavorite(data.isFavorite);
    } catch (error) {
      console.error("즐겨찾기 변경 실패:", error);
    }
  };

  if (!restaurant) {
    return (
      <div className="restaurant-detail-page">
        <MainHeader />

        <main className="restaurant-detail-content">
          <p>매장 정보를 불러오는 중이에요.</p>
        </main>

        <BottomNav />
      </div>
    );
  }

  const menus = restaurant.menus || [];
  const benefits = restaurant.benefits || [];

  return (
    <div className="restaurant-detail-page">
      <MainHeader />

      <main className="restaurant-detail-content">
        <button className="detail-back-button" onClick={() => navigate(-1)}>
          <img src={backButton} alt="뒤로가기" />
        </button>

        <button
          className="detail-favorite-button"
          onClick={handleFavoriteClick}
        >
          <img src={isFavorite ? fav2 : fav1} alt="즐겨찾기" />
        </button>

        <section className="detail-title-section">
          <h2 className="detail-title">{restaurant.name}</h2>
          <p className="detail-address">{restaurant.address}</p>
        </section>

        <div className="detail-divider"></div>

        <section className="detail-benefit-section">
          <div className="detail-benefit-text-wrapper">
            <h3 className="detail-section-title">제휴 내용</h3>

            <p className="detail-benefit-text">
              {benefits[0]?.description ||
                restaurant.description ||
                "제휴 정보가 없습니다."}
            </p>
          </div>

          <img
            src={detailCh}
            alt="디테일 페이지 캐릭터"
            className="detail-character"
          />
        </section>

        <section className="detail-menu-section">
          <h3 className="benefit-section-title">대표 메뉴</h3>

          <div className="detail-menu-grid">
            {menus.length > 0 ? (
              menus.map((menu) => (
                <img
                  key={menu.menuId}
                  src={menu.imageUrl || jangsuImage}
                  alt={menu.name}
                  className="detail-menu-image"
                />
              ))
            ) : (
              <>
                <img
                  src={jangsuImage}
                  alt="대표 메뉴"
                  className="detail-menu-image"
                />
                <img
                  src={jangsuImage}
                  alt="대표 메뉴"
                  className="detail-menu-image"
                />
                <img
                  src={jangsuImage}
                  alt="대표 메뉴"
                  className="detail-menu-image"
                />
                <img
                  src={jangsuImage}
                  alt="대표 메뉴"
                  className="detail-menu-image"
                />
              </>
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default RestaurantDetailPage;
