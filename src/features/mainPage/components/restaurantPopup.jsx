import "./restaurantPopup.css";

import { useNavigate } from "react-router-dom";

import cancelButton from "../../../assets/cancelButton.svg";
import popupCh from "../../../assets/popupCh.svg";
import jangsuImage from "../../../assets/jangsuImage.svg";

import { ROUTES } from "../../../router/routes.constant";

function RestaurantPopup({ restaurant, onClose }) {
  const navigate = useNavigate();

  if (!restaurant) return null;

  return (
    <div className="restaurant-popup">
      <button className="popup-close-button" onClick={onClose}>
        <img src={cancelButton} alt="닫기 버튼" className="popup-close-icon" />
      </button>

      <div className="popup-header">
        <h2 className="popup-name">{restaurant.name}</h2>
        <p className="popup-address">{restaurant.address}</p>
      </div>

      <div className="popup-divider top"></div>

      <div className="popup-benefit-section">
        <img src={popupCh} alt="제휴 캐릭터" className="popup-character" />

        <p className="popup-benefit-text">
          {restaurant.description || "제휴 정보가 없습니다."}
        </p>
      </div>

      <div className="popup-divider bottom"></div>

      <p className="popup-menu-title">대표메뉴</p>

      <div className="popup-menu-list">
        <img
          src={restaurant.thumbnailUrl || jangsuImage}
          alt="대표메뉴"
          className="popup-menu-image"
        />

        <img
          src={restaurant.thumbnailUrl || jangsuImage}
          alt="대표메뉴"
          className="popup-menu-image"
        />
      </div>

      <button
        className="popup-detail-button"
        onClick={() => navigate(ROUTES.RESTAURANT_DETAIL(restaurant.storeId))}
      >
        자세한 정보 보기
      </button>
    </div>
  );
}

export default RestaurantPopup;
