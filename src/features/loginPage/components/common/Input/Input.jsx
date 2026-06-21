import error from "../../../../../assets/error.svg";
import "./Input.css";

function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isError = false,
}) {
  return (
    <div className="input-box">
      {label && <label className="input-label">{label}</label>}

      <div className="input-wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />

        {isError && (
          <img
            src={error}
            alt="error"
            className="input-error-icon"
          />
        )}
      </div>
    </div>
  );
}

export default Input;