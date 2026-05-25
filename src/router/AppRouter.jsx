import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "../features/mainPage/pages/HomePage";

import { ROUTES } from "./routes.constant";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
    </Routes>
  );
}

export default AppRouter;
