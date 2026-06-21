import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../features/mainPage/pages/HomePage";
import RestaurantDetailPage from "../features/mainPage/pages/RestaurantDetailPage";
import MyPage from "../features/myPage/pages/MyPage";
import QRPage from "../features/qrPage/pages/QRPage";

import College from "../features/myPage/pages/College";
import Department from "../features/myPage/pages/Department";
import Favorite from "../features/myPage/pages/Favorite";

import LoginPage from "../features/loginPage/pages/LoginPage/LoginPage";
import EmailCheckPage from "../features/loginPage/pages/signupPage/EmailCheckPage/EmailCheckPage";
import PasswordSettingPage from "../features/loginPage/pages/signupPage/PasswordSettingPage/PasswordSettingPage";
import NicknameSettingPage from "../features/loginPage/pages/signupPage/NicknameSettingPage/NicknameSettingPage";
import SignupSuccessPage from "../features/loginPage/pages/signupPage/SignupSuccessPage/SignupSuccessPage";

import { ROUTES } from "./routes.constant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />

      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route
        path={ROUTES.RESTAURANT_DETAIL()}
        element={<RestaurantDetailPage />}
      />
      <Route path={ROUTES.MYPAGE} element={<MyPage />} />
      <Route path="/qrpage" element={<QRPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/mypage/college" element={<College />} />
      <Route path="/mypage/department" element={<Department />} />
      <Route path="/mypage/favorite" element={<Favorite />} />

      <Route
        path={ROUTES.RESTAURANT_DETAIL()}
        element={<RestaurantDetailPage />}
      />

      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP_EMAIL} element={<EmailCheckPage />} />
      <Route path={ROUTES.SIGNUP_PASSWORD} element={<PasswordSettingPage />} />
      <Route path={ROUTES.SIGNUP_NICKNAME} element={<NicknameSettingPage />} />
      <Route path={ROUTES.SIGNUP_SUCCESS} element={<SignupSuccessPage />} />
    </Routes>
  );
}

export default AppRouter;
