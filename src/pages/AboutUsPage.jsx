import { useState } from "react";
import Loading from "../components/loading/Loading";
import Layout from "../layout/Layout";
import {setLoading} from "../setLoadingFunction"
import AboutUs from "../components/aboutUs/AboutUs";

const AboutUsPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <AboutUs /> </Layout>)
    );
}

export default AboutUsPage