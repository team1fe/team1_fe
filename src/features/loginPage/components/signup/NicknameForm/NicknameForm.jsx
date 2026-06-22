import { useState } from "react";
import { useNavigate } from "react-router-dom";

import error from "../../../../../assets/error.svg";
import { ROUTES } from "../../../../../router/routes.constant";

import "./NicknameForm.css";

function NicknameForm() {
  const navigate = useNavigate();

  const [nickname, setNickname] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    if (nickname.trim().length < 2) {
      setIsError(true);
      return;
    }

    setIsError(false);
    navigate(ROUTES.SIGNUP_SUCCESS);
  };

  return (
    <div className="nickname-form">
      <button
        type="button"
        className="nickname-back-button"
        onClick={() => navigate(ROUTES.SIGNUP_PASSWORD)}
      >
        ‹
      </button>

      <div className="nickname-title-area">
        <h1 className="nickname-title">닉네임을 설정해주세요.</h1>
        <p className="nickname-desc">설정하신 이름으로 불러드릴게요.</p>
        <p className="nickname-sub-desc">
          유해한 이름은 통보없이 제재당할 수 있어요.
        </p>
      </div>

      <div className="nickname-input-box">
        <input
          className="nickname-input"
          type="text"
          placeholder="예) 김광운"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
            setIsError(false);
          }}
        />

        {isError && (
          <img
            src={error}
            alt="닉네임 오류"
            className="nickname-error-icon"
          />
        )}
      </div>

      {isError && (
        <p className="nickname-error-message">
          닉네임은 2자 이상 입력해주세요.
        </p>
      )}

      <button
        type="button"
        className="nickname-next-button"
        onClick={handleSubmit}
      >
        다음
      </button>
    </div>
  );
}

export default NicknameForm;