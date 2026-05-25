import "./filterModal.css";

function FilterModal({ onClose }) {
  return (
    <div className="filter-overlay">
      <div className="filter-modal">
        <h3>필터 선택</h3>

        <button className="filter-option">단과대</button>

        <button className="filter-option">학과(부)</button>

        <button className="close-button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default FilterModal;
