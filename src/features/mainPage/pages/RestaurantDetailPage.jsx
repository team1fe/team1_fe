import "./RestaurantDetailPage.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";
import backButton from "../../../assets/backButton.svg";
import fav1 from "../../../assets/fav1.svg";
import fav2 from "../../../assets/fav2.svg";
import detailCh from "../../../assets/detailCh.svg";
import jangsuImage from "../../../assets/jangsuImage.svg";

function RestaurantDetailPage() {
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  console.log(restaurantId);

  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="restaurant-detail-page">
      {" "}
      <MainHeader />{" "}
      <main className="restaurant-detail-content">
        {" "}
        <button className="detail-back-button" onClick={() => navigate(-1)}>
          {" "}
          <img src={backButton} alt="뒤로가기" />{" "}
        </button>{" "}
        <button
          className="detail-favorite-button"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {" "}
          <img src={isFavorite ? fav2 : fav1} alt="즐겨찾기" />{" "}
        </button>{" "}
        <section className="detail-title-section">
          {" "}
          <h2 className="detail-title">장수국수</h2>{" "}
          <p className="detail-address">서울 노원구 광운로 27 2층</p>{" "}
        </section>{" "}
        <div className="detail-divider"></div>{" "}
        <section className="detail-benefit-section">
          {" "}
          <div className="detail-benefit-text-wrapper">
            {" "}
            <h3 className="detail-section-title">제휴 내용</h3>{" "}
            <p className="detail-benefit-text">
              {" "}
              오후 4시 이후 메뉴 10% 할인 <br /> &#40;김밥 단일메뉴
              제외&#41;{" "}
            </p>{" "}
          </div>{" "}
          <img
            src={detailCh}
            alt="디테일 페이지 캐릭터"
            className="detail-character"
          />{" "}
        </section>{" "}
        <section className="detail-menu-section">
          {" "}
          <h3 className="benefit-section-title">대표 메뉴</h3>{" "}
          <div className="detail-menu-grid">
            {" "}
            <img
              src={jangsuImage}
              alt="대표 메뉴"
              className="detail-menu-image"
            />{" "}
            <img
              src={jangsuImage}
              alt="대표 메뉴"
              className="detail-menu-image"
            />{" "}
            <img
              src={jangsuImage}
              alt="대표 메뉴"
              className="detail-menu-image"
            />{" "}
            <img
              src={jangsuImage}
              alt="대표 메뉴"
              className="detail-menu-image"
            />{" "}
          </div>{" "}
        </section>{" "}
      </main>{" "}
      <BottomNav />{" "}
    </div>
  );
}
export default RestaurantDetailPage;
