import "./underBar.css";

import { useRef, useState } from "react";

import RestaurantCard from "./restaurantCard";

import noResult from "../../../assets/noResult.svg";

const restaurants = [
  {
    id: 1,
    name: "장수국수",
    category: "국수",
    address: "서울 노원구 광운로 27 2층",
  },
  {
    id: 2,
    name: "광운분식",
    category: "분식",
    address: "서울 노원구 광운로 20",
  },
];

function UnderBar({ expanded, setExpanded }) {
  const [showFilter, setShowFilter] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("필터");

  const [searchText, setSearchText] = useState("");

  const startY = useRef(0);

  const isDragging = useRef(false);

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.includes(searchText),
  );

  const startDrag = (clientY) => {
    startY.current = clientY;

    isDragging.current = true;
  };

  const endDrag = (clientY) => {
    if (!isDragging.current) return;

    const diff = startY.current - clientY;

    if (diff > 40) {
      setExpanded(true);
    } else if (diff < -40) {
      setExpanded(false);
    }

    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    startDrag(e.clientY);

    const handleMouseUp = (event) => {
      endDrag(event.clientY);

      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleTouchStart = (e) => {
    startDrag(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    endDrag(e.changedTouches[0].clientY);
  };

  return (
    <div className={`under-bar ${expanded ? "expanded" : "collapsed"}`}>
      <div className="drag-section">
        <div
          className="drag-area"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />

        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="찾는 매장을 입력하세요!"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setExpanded(true)}
          />

          <div className="filter-wrapper">
            <button
              className={`filter-button ${
                selectedFilter !== "필터" ? "selected" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();

                setShowFilter(!showFilter);
              }}
            >
              {selectedFilter}
            </button>

            {showFilter && (
              <div className="filter-dropdown">
                <button
                  className="filter-option"
                  onClick={() => {
                    setSelectedFilter("단과대");

                    setShowFilter(false);
                  }}
                >
                  단과대
                </button>

                <div className="filter-divider"></div>

                <button
                  className="filter-option"
                  onClick={() => {
                    setSelectedFilter("학과(부)");

                    setShowFilter(false);
                  }}
                >
                  학과(부)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="list-divider"></div>

      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              category={restaurant.category}
              address={restaurant.address}
            />
          ))
        ) : (
          <div className="no-result-container">
            <img
              src={noResult}
              alt="검색 결과 없음"
              className="no-result-image"
            />

            <p className="no-result-text">
              <>
                검색 결과가 없어요!
                <br />
                <br />
                매장 이름을 확인해 주세요.
              </>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UnderBar;
