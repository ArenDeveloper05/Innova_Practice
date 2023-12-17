import { useState } from "react";
import Loading from "../components/loading/Loading";
import Reservation from "../components/reservation/Reservation";
import Layout from "../layout/Layout";
import { setLoading } from "../setLoadingFunction";

const ReservationPage = () => {
  const [isLoading, setIsLoading] = useState(true)
    setLoading(setIsLoading);
  return (
    isLoading ? <Loading /> : (<Layout> <Reservation /> </Layout>)
    );
};

export default ReservationPage;
