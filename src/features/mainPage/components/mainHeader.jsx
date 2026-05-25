import "./mainHeader.css";
import schoolLogo from "../../../assets/schoolLogo.svg";

function MainHeader() {
  return (
    <header className="main-header">
      <img src={schoolLogo} alt="광운대학교 로고" className="school-logo" />
    </header>
  );
}

export default MainHeader;
