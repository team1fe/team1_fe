import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../../../assets/logo2.svg";
import { ROUTES } from "../../../../router/routes.constant";
import "./SplashPage.css";

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(ROUTES.LOGIN);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="splash-page">
      <div className="splash-content">
        <p className="splash-title">광운대학교 학생 제휴 커넥트 맵</p>
        <img className="splash-logo" src={logo} alt="나침팡 로고" />
      </div>
    </main>
  );
}

export default SplashPage;