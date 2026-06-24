import { useNavigate } from "react-router-dom";

import backIcon from "../../../assets/backIcon.svg";
import { ROUTES } from "../../../router/routes.constant";

import "./backButton.css";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(ROUTES.MYPAGE)}>
      <img src={backIcon} alt="마이페이지로 돌아가기" />
    </button>
  );
}

export default BackButton;
