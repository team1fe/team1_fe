import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../features/mainPage/pages/HomePage";
import RestaurantDetailPage from "../features/mainPage/pages/RestaurantDetailPage";

import { ROUTES } from "./routes.constant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />

      <Route
        path={ROUTES.RESTAURANT_DETAIL()}
        element={<RestaurantDetailPage />}
      />
    </Routes>
  );
}

export default AppRouter;
