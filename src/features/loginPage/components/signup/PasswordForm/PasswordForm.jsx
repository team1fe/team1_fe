import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";
import { ROUTES } from "../../../../../router/routes.constant";

import "./PasswordForm.css";

function PasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (password.length < 4) {
      setIsError(true);
      return;
    }

    setIsError(false);
    navigate(ROUTES.SIGNUP_NICKNAME);
  };

  return (
    <div className="password-form">
      <button
        className="password-back-button"
        type="button"
        onClick={() => navigate(ROUTES.SIGNUP_EMAIL)}
      >
        ‹
      </button>

      <div className="password-title-area">
        <h1 className="password-title">비밀번호를 설정해주세요.</h1>
        <p className="password-subtitle">
          문자, 숫자, 기호를 4개 이상 사용해주세요.
        </p>
      </div>

      <div className="password-input-box">
        <input
          className="password-input"
          type="password"
          placeholder="대/소문자, 숫자 포함 4자 이상"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsError(false);
          }}
        />

        {isError && (
          <img
            className="password-error-icon"
            src={error}
            alt="비밀번호 오류"
          />
        )}
      </div>

      {isError && (
        <p className="password-error-text">
          비밀번호 양식을 확인해주세요.
        </p>
      )}

      <button
        className="password-next-button"
        type="button"
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
}

export default PasswordForm;