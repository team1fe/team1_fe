import "./mapView.css";

import { useState } from "react";

import UnderBar from "./underBar";
import RestaurantPopup from "./restaurantPopup";

import myPos from "../../../assets/myPos.svg";

function MapView() {
  const [expanded, setExpanded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  return (
    <div className="map-view">
      <div className="map-area">지도 영역</div>

      {!expanded && <img src={myPos} alt="나의 위치" className="my-pos" />}

      <RestaurantPopup
        restaurant={selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />

      <UnderBar
        expanded={expanded}
        setExpanded={setExpanded}
        onSelectRestaurant={setSelectedRestaurant}
      />
    </div>
  );
}

export default MapView;
