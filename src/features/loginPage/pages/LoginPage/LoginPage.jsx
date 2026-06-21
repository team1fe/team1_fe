import logo from "../../../../assets/logo.svg";

import Login from "../../components/login/login";

import "./LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="logo-box">
        <img src={logo} alt="로고" className="logo-image" />
        <p className="logo-text">광운대학교 학생 제휴 커넥트 맵</p>
      </div>

      <Login />
    </div>
  );
}

export default LoginPage;