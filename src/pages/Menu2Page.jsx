import { useState } from "react";
import Loading from "../components/loading/Loading";
import Menu2 from "../components/menu2/Menu2";
import Layout from "../layout/Layout";
import { setLoading } from "../setLoadingFunction";

const Menu2Page = () => {
  const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <Menu2 /> </Layout>)
    );
};

export default Menu2Page;