import "./mapView.css";

import { useState, useEffect, useRef } from "react";

import UnderBar from "./underBar";
import RestaurantPopup from "./restaurantPopup";

import myPos from "../../../assets/myPos.svg";

function MapView() {
  const mapRef = useRef(null);
  const kakaoMapRef = useRef(null);
  const markerRef = useRef(null);

  const [expanded, setExpanded] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false`;

    script.async = true;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = mapRef.current;

        const center = new window.kakao.maps.LatLng(37.6199, 127.0591);

        const options = {
          center,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        kakaoMapRef.current = map;

        setTimeout(() => {
          map.relayout();
          map.setCenter(center);
        }, 100);
      });
    };
  }, []);

  const moveToMyLocation = () => {
    if (!navigator.geolocation) {
      alert("위치 정보를 지원하지 않는 브라우저입니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const moveLatLng = new window.kakao.maps.LatLng(lat, lng);

        const map = kakaoMapRef.current;

        map.setCenter(moveLatLng);

        if (markerRef.current) {
          markerRef.current.setMap(null);
        }

        markerRef.current = new window.kakao.maps.Marker({
          position: moveLatLng,
          map,
        });
      },
      () => {
        alert("현재 위치를 가져올 수 없습니다.");
      },
    );
  };

  return (
    <div className="map-view">
      <div ref={mapRef} className="map-area"></div>

      {!expanded && (
        <img
          src={myPos}
          alt="나의 위치"
          className="my-pos"
          onClick={moveToMyLocation}
        />
      )}

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
