import "./underBar.css";

import { useEffect, useRef, useState } from "react";
import { getStores } from "../../../api/storeApi";

import RestaurantCard from "./restaurantCard";
import noResult from "../../../assets/noResult.svg";
import jangsuImage from "../../../assets/jangsuImage.svg";

function UnderBar({ expanded, setExpanded, onSelectRestaurant }) {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("필터");
  const [searchText, setSearchText] = useState("");

  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const startY = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setIsLoading(true);

        const data = await getStores({
          keyword: searchText,
          page: 0,
          size: 20,
        });

        console.log("매장 목록 응답:", data);
        setRestaurants(data?.content || []);
      } catch (error) {
        console.error("매장 목록 조회 실패:", error);
        setRestaurants([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStores();
  }, [searchText]);

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
        {isLoading ? (
          <p className="no-result-text">매장 목록을 불러오는 중이에요.</p>
        ) : restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.storeId}
              name={restaurant.name}
              category={restaurant.description || "제휴 매장"}
              address={restaurant.address}
              imageUrl={restaurant.thumbnailUrl || jangsuImage}
              onClick={() => onSelectRestaurant(restaurant)}
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
              검색 결과가 없어요!
              <br />
              <br />
              백엔드에 매장 데이터가 아직 없을 수 있어요.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UnderBar;
