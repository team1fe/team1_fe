import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";
import { ROUTES } from "../../../../../router/routes.constant";

import "./EmailForm.css";

function EmailForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [showCodeInput, setShowCodeInput] = useState(false);
  const [isCodeError, setIsCodeError] = useState(false);

  const handleVerify = () => {
    setShowCodeInput(true);
    setIsCodeError(false);
  };

  const handleNext = () => {
    if (code === "123456") {
      navigate(ROUTES.SIGNUP_PASSWORD);
    } else {
      setIsCodeError(true);
    }
  };

  return (
    <div className="email-form">
      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ‹
      </button>

      <h1 className="email-title">이메일 주소를 알려주세요.</h1>

      <p className="email-desc">
        광운대학교 웹메일 주소를 입력해주세요.
      </p>

      <p className="email-sub-desc">
        소속 정보를 확인하고, 회원 정보를 관리하는 데 쓰여요.
      </p>

      <div className="email-input-box">
        <input
          type="email"
          placeholder="@kw.ac.kr"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="button"
          className="verify-button"
          onClick={handleVerify}
        >
          인증
        </button>
      </div>

      {showCodeInput && (
        <>
          <div className="email-input-box code-input-box">
            <input
              type="text"
              placeholder="인증번호를 입력해주세요."
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setIsCodeError(false);
              }}
            />

            {isCodeError && (
              <img
                src={error}
                alt="에러"
                className="input-error-icon"
              />
            )}
          </div>

          {isCodeError && (
            <p className="code-error-message">
              인증번호를 확인해주세요.
            </p>
          )}
        </>
      )}

      <button
        type="button"
        className="next-button"
        disabled={!showCodeInput}
        onClick={handleNext}
      >
        다음
      </button>
    </div>
  );
}

export default EmailForm;