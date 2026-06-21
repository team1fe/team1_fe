import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";
import { ROUTES } from "../../../../../router/routes.constant";

import "./PasswordForm.css";

function PasswordForm() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const isValidPassword = (value) => {
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSymbol = /[^a-zA-Z0-9]/.test(value);

    return value.length >= 4 && hasLetter && hasNumber && hasSymbol;
  };

  const handleNext = () => {
    if (isValidPassword(password)) {
      navigate(ROUTES.SIGNUP_NICKNAME);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="password-form">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ‹
      </button>

      <h1 className="password-title">
        비밀번호를 설정해주세요.
      </h1>

      <p className="password-desc">
        문자, 숫자, 기호를 4개 이상 사용해주세요.
      </p>

      <div className="password-input-box">
  <input
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
      src={error}
      alt="에러"
      className="password-error-icon"
    />
  )}
</div>

{isError && (
  <p className="password-error-message">
    비밀번호 양식을 확인해주세요.
  </p>
)}

      <button
        type="button"
        className="next-button"
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
}

export default PasswordForm;