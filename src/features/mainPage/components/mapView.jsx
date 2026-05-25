import "./mapView.css";

import { useState } from "react";

import UnderBar from "./underBar";

import myPos from "../../../assets/myPos.svg";

function MapView() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="map-view">
      <div className="map-area">지도 영역</div>

      {!expanded && <img src={myPos} alt="나의 위치" className="my-pos" />}

      <UnderBar expanded={expanded} setExpanded={setExpanded} />
    </div>
  );
}

export default MapView;
