import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import MenuPage from "../pages/MenuPage";
import ReservationPage from "../pages/ReservationPage";
import BlogLeftSidePage from "../pages/BlogLeftSidePage";
import AboutUsPage from "../pages/AboutUsPage";
import Menu2Page from "../pages/Menu2Page";
const {
  HOME_PAGE_ROUTE,
  LEFTSIDE_PAGE_ROUTE,
  MENU_PAGE_ROUTE,
  RESERVATION_PAGE_ROUTE,
  ABOUTUS_PAGE_ROUTE,
  MENU2_PAGE_ROUTE
} = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={LEFTSIDE_PAGE_ROUTE} element={<BlogLeftSidePage />} />
      <Route path={MENU_PAGE_ROUTE} element={<MenuPage />} />
      <Route path={RESERVATION_PAGE_ROUTE} element={<ReservationPage />} />
      <Route path={ABOUTUS_PAGE_ROUTE} element={<AboutUsPage />} />
      <Route path={MENU2_PAGE_ROUTE} element={<Menu2Page />} />
    </Routes>
  );
};

export default AppRoutes;
