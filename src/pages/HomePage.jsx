import { useState } from "react";
import Home from "../components/home/Home";
import Loading from "../components/loading/Loading";
import Layout from "../layout/Layout";
import {setLoading} from "../setLoadingFunction"

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <Home /> </Layout>)
    );
};

export default HomePage;
