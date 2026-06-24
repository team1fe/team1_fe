import { useEffect, useRef, useState } from "react";

import MainHeader from "../../myPage/components/mainHeader";
import BottomNav from "../components/qrBottomNav";

import QrScanBox from "../components/qrScanBox";
import QrStatusModal from "../components/qrStatusModal";

import styles from "./QrPage.module.css";

function QrPage() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [scanStatus, setScanStatus] = useState("idle");

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
          },
          audio: false,
        });

        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("카메라 실행 실패:", error);
        alert("카메라 권한을 허용해 주세요.");
      }
    };

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleScanClick = () => {
    setScanStatus("scanning");
  };

  const handleCloseModal = () => {
    setScanStatus("idle");
  };

  useEffect(() => {
    if (scanStatus !== "scanning") return;

    const timer = setTimeout(() => {
      setScanStatus("success");
    }, 1500);

    return () => clearTimeout(timer);
  }, [scanStatus]);

  return (
    <div className={styles.qrPage}>
      <div className={styles.qrFrame}>
        <video
          ref={videoRef}
          className={styles.cameraVideo}
          autoPlay
          playsInline
          muted
        />

        <div className={styles.cameraDim}></div>

        <MainHeader />

        <main className={styles.qrMain}>
          <QrScanBox onScanClick={handleScanClick} />
        </main>

        {scanStatus !== "idle" && (
          <QrStatusModal status={scanStatus} onClose={handleCloseModal} />
        )}

        <BottomNav />
      </div>
    </div>
  );
}

export default QrPage;
