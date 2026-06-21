import { useNavigate } from "react-router-dom";

import signupSuccess from "../../../../../assets/signup_success.svg";
import { ROUTES } from "../../../../../router/routes.constant";

import "./SignupSuccessPage.css";

function SignupSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="signup-success-page">
      <h1>회원가입이 완료되었어요!</h1>

      <p>앞으로 나를 위한 제휴 정보를 확인할 수 있어요.</p>

      <img
        src={signupSuccess}
        alt="회원가입 성공"
        className="success-image"
      />

      <button
        type="button"
        className="login-page-button"
        onClick={() => navigate(ROUTES.LOGIN)}
      >
        로그인 페이지로
      </button>
    </div>
  );
}

export default SignupSuccessPage;