import { useNavigate } from "react-router-dom";
import { useState } from "react";

import error from "../../../../assets/error.svg";
import { ROUTES } from "../../../../router/routes.constant";

import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    if (email === "test@kw.ac.kr" && password === "1234") {
      navigate(ROUTES.HOME);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="login-form">
      <div className="login-input-box">
        <label className="login-input-label">광운대학교 웹메일 주소</label>

        <div className="login-input-line">
          <input
            className="login-input-field"
            type="email"
            placeholder="예) kw@kw.ac.kr"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsError(false);
            }}
          />

          {isError && (
            <img className="login-input-error-icon" src={error} alt="에러" />
          )}
        </div>
      </div>

      <div className="login-input-box password-box">
        <label className="login-input-label">비밀번호</label>

        <div className="login-input-line">
          <input
            className="login-input-field"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
          />

          {isError && (
            <img className="login-input-error-icon" src={error} alt="에러" />
          )}
        </div>
      </div>

      {isError && (
        <p className="login-error-text">비밀번호를 확인해주세요.</p>
      )}

      <button className="login-button" onClick={handleLogin}>
        로그인
      </button>

      <button
        className="signup-button"
        onClick={() => navigate(ROUTES.SIGNUP_EMAIL)}
      >
        회원가입
      </button>
    </div>
  );
}

export default Login;