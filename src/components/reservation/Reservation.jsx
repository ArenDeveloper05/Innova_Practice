import ReservationForm from "./reservationForm/ReservationForm";
import banner from "../../assets/images/ReservationImages/background.jpg";
import BasicBanner from "../common/BasicBanner";

const Reservation = () => {
  return (
    <div>
      <BasicBanner
        title="RESERVATION"
        pageName="Reservation"
        backgroundImage={banner}
      />
      <ReservationForm />
    </div>
  );
};

export default Reservation;
