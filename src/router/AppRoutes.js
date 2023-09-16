import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import LeftSidePage from "../pages/LeftSidePage";
import MenuPage from "../pages/MenuPage";
import ReservationPage from "../pages/ReservationPage";
const { HOME_PAGE_ROUTE,LEFTSIDE_PAGE_ROUTE, MENU_PAGE_ROUTE } = ROUTER;
const { RESERVATION_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={LEFTSIDE_PAGE_ROUTE} element={<LeftSidePage/>}/>
      <Route path={MENU_PAGE_ROUTE} element={<MenuPage />} />
      <Route path={RESERVATION_PAGE_ROUTE} element={<ReservationPage />} />
    </Routes>
  );
};

export default AppRoutes;
