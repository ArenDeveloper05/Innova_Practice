import { useState } from "react";
import Loading from "../components/loading/Loading";
import Menu from "../components/menu/Menu";
import Layout from "../layout/Layout";
import { setLoading } from "../setLoadingFunction";

const MenuPage = () => {
  const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <Menu /> </Layout>)
    );
};

export default MenuPage;
