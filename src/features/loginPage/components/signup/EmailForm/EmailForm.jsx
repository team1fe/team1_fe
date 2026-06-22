import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../../../router/routes.constant";

import "./EmailForm.css";

function EmailForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isCodeInputOpen, setIsCodeInputOpen] = useState(false);

  const handleSendCode = () => {
    if (email.trim() === "") return;

    setIsCodeInputOpen(true);
  };

  const handleNext = () => {
    if (!isCodeInputOpen) return;

    navigate(ROUTES.SIGNUP_PASSWORD);
  };

  return (
    <div className="email-form">
      <button
        className="email-back-button"
        type="button"
        onClick={() => navigate(ROUTES.LOGIN)}
      >
        ‹
      </button>

      <div className="email-title-area">
        <h1 className="email-title">이메일 주소를 알려주세요.</h1>
        <p className="email-subtitle">광운대학교 웹메일 주소를 입력해주세요.</p>
        <p className="email-description">
          소속 정보를 불러오고, 회원 정보를 관리하는 데 쓰여요.
        </p>
      </div>

      <div className="email-input-box">
        <input
          className="email-input"
          type="email"
          placeholder="@kw.ac.kr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="email-check-button"
          type="button"
          onClick={handleSendCode}
        >
          인증
        </button>
      </div>

      {isCodeInputOpen && (
        <div className="email-code-box">
          <input
            className="email-code-input"
            type="text"
            placeholder="인증번호를 입력해주세요."
          />
        </div>
      )}

      <button
        className={`email-next-button ${isCodeInputOpen ? "active" : ""}`}
        type="button"
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
}

export default EmailForm;