import React, { useState } from "react";
import expand from "../../../assets/Icons/ReservationIcons/expand_more.png";
import "./ReservationForm.scss";

const ReservationForm = () => {
  const [select, setSelect] = useState(false);

  return (
    <section className="reservation">
      <div className="reservation-inner">
        <div className="reservation-inner-info">
          <p>Make Online Reservation</p>
          <h2>BOOK A TABLE</h2>
        </div>
        <form>
          <div className="reservation-inner-content">
            <div className="reservation-inner-content-first">
              <div className="reservation-inner-content-first-select">
                <input type="text" placeholder="Hour" />
                <img src={expand} alt="expand" />
              </div>
              <input type="text" placeholder="Pick a Date" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="reservation-inner-content-second">
              <div className="reservation-inner-content-second-select">
                <input type="text" placeholder="Number Of People" />
                <img src={expand} alt="expand" />
              </div>
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Email Adress" />
            </div>
          </div>
          <input type="text" placeholder="Comments" />
          <button>BOOK A TABLE</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
