import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";

import error from "../../../../assets/error.svg";

import { ROUTES } from "../../../../router/routes.constant";

import "./login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    // 임시 로그인 조건
    if (
      email === "test@kw.ac.kr" &&
      password === "1234"
    ) {
      navigate(ROUTES.HOME);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="login-form">
      <Input
        type="email"
        label="광운대학교 웹메일 주소"
        placeholder="예) test@kw.ac.kr"
        value={email}
        isError={isError}
        onChange={(e) => {
          setEmail(e.target.value);
          setIsError(false);
        }}
      />

      <Input
        type="password"
        label="비밀번호"
        placeholder="비밀번호를 확인해주세요."
        value={password}
        isError={isError}
        onChange={(e) => {
          setPassword(e.target.value);
          setIsError(false);
        }}
      />

      {isError && (
        <div className="error-box">
          <img src={error} alt="에러" />

          <span>이메일 또는 비밀번호가 틀렸습니다.</span>
        </div>
      )}

      <Button
        text="로그인"
        onClick={handleLogin}
      />

      <Button
        text="회원가입"
        onClick={() => navigate(ROUTES.SIGNUP_EMAIL)}
        variant="secondary"
      />
    </div>
  );
}

export default Login;