import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import BlogLeftSide from "../pages/blog-leftSide/BlogLeftSide";
const { HOME_PAGE_ROUTE,LEFTSIDE_PAGE_ROUTE } = ROUTER;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={LEFTSIDE_PAGE_ROUTE} element={<BlogLeftSide/>}/>
    </Routes>
  );
};

export default AppRoutes;
