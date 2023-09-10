import { useState } from "react";
import Contact from "../components/contact/Contact";
import Loading from "../components/loading/Loading";
import Layout from "../layout/Layout";
import {setLoading} from "../setLoadingFunction"

const ContactPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <Contact /> </Layout>)
    );
}

export default ContactPage