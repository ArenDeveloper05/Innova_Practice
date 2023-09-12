import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import LeftSidePage from "../pages/LeftSidePage";
const { HOME_PAGE_ROUTE,LEFTSIDE_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={LEFTSIDE_PAGE_ROUTE} element={<LeftSidePage/>}/>
    </Routes>
  );
};

export default AppRoutes;
