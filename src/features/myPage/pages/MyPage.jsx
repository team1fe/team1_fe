import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainHeader from "../components/mainHeader";
import BottomNav from "../components/bottomNav";
import PartnershipCard from "../components/partnershipCard";

import collegeIcon from "../../../assets/college.svg";
import departmentIcon from "../../../assets/department.svg";
import favoriteIcon from "../../../assets/favoriteCharacter.svg";

import { ROUTES } from "../../../router/routes.constant";
import { getMyPage } from "../../../api/myPageApi";

import styles from "./MyPage.module.css";

function MyPage() {
  const navigate = useNavigate();

  const [myPageData, setMyPageData] = useState({
    name: "김사자",
    college: {
      name: "광운대학교",
    },
    department: {
      name: "미디어커뮤니케이션학부",
    },
    benefitUsageCount: 12,
  });

  useEffect(() => {
    const fetchMyPage = async () => {
      try {
        const data = await getMyPage();

        console.log("마이페이지 응답:", data);
        setMyPageData(data);
      } catch (error) {
        console.error("마이페이지 조회 실패:", error);
      }
    };

    fetchMyPage();
  }, []);

  return (
    <div className={styles.screen}>
      <MainHeader />

      <main className={styles.content}>
        <section className={styles.profileSection}>
          <h1>
            안녕하세요, <span>{myPageData.name}님</span>
          </h1>

          <p>
            {myPageData.college?.name || "광운대학교"}
            <br />
            {myPageData.department?.name || "소속 정보 없음"}
          </p>

          <small>
            지금까지 {myPageData.benefitUsageCount ?? 0}번 혜택을 받았어요!
          </small>
        </section>

        <section className={styles.partnershipSection}>
          <h2>나의 제휴</h2>

          <div className={styles.cardList}>
            <PartnershipCard
              icons={[collegeIcon, departmentIcon]}
              title="단과대학 제휴"
              onClick={() => navigate(ROUTES.COLLEGE)}
            />

            <PartnershipCard
              icons={[departmentIcon]}
              title="학과(부) 제휴"
              onClick={() => navigate(ROUTES.DEPARTMENT)}
            />

            <PartnershipCard
              icons={[favoriteIcon]}
              title="즐겨찾기"
              onClick={() => navigate(ROUTES.FAVORITE)}
            />
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}

export default MyPage;
