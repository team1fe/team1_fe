import "./restaurantPopup.css";
import { useNavigate } from "react-router-dom";
import cancelButton from "../../../assets/cancelButton.svg";
import { ROUTES } from "../../../router/routes.constant";

import popupCh from "../../../assets/popupCh.svg";
import jangsuImage from "../../../assets/jangsuImage.svg";

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
          오후 4시 이후 메뉴 10% 할인
          <br />
          &#40;김밥 단일메뉴 제외&#41;
        </p>
      </div>

      <div className="popup-divider bottom"></div>

      <p className="popup-menu-title">대표메뉴</p>

      <div className="popup-menu-list">
        <img
          src={jangsuImage}
          alt="장수국수 대표메뉴"
          className="popup-menu-image"
        />
        <img
          src={jangsuImage}
          alt="장수국수 대표메뉴"
          className="popup-menu-image"
        />
      </div>

      <button
        className="popup-detail-button"
        onClick={() => navigate(ROUTES.RESTAURANT_DETAIL(restaurant.id))}
      >
        자세한 정보 보기
      </button>
    </div>
  );
}

export default RestaurantPopup;
