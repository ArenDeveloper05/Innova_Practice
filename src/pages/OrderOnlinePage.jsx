import { useState } from "react";
import Loading from "../components/loading/Loading";
import OrderOnline from "../components/orderOnline/OrderOnline";
import Layout from "../layout/Layout";
import { setLoading } from "../setLoadingFunction";

const OrderOnlinePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <OrderOnline /> </Layout>)
    );
}

export default OrderOnlinePage