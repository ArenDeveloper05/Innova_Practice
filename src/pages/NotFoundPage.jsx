import { useState } from "react";
import Loading from "../components/loading/Loading";
import NotFound from "../components/notFound/NotFound";
import Layout from "../layout/Layout";
import { setLoading } from "../setLoadingFunction";

const NotFoundPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <NotFound /> </Layout>)
    );
}

export default NotFoundPage