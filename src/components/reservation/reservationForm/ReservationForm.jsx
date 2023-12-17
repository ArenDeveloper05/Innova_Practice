import React, { useRef, useState } from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import "./ReservationForm.scss";

const ReservationForm = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const renderFirst = useRef(false);
  const renderSecond = useRef(false);

  return (
    <section className="reservation">
      <div className="reservation-inner">
        <div className="reservation-inner-info">
          <p>Make Online Reservation</p>
          <h2>BOOK A TABLE</h2>
        </div>
        <form className="reservation-inner-form">
          <div
            className={`reservation-inner-form-item ${showFirst && "orange"}`}
            onClick={() => {
              if (renderFirst.current === false) {
                renderFirst.current = true;
              }
              setShowFirst(!showFirst);
            }}
          >
            <input type="text" placeholder="Hour" />
            <MdOutlineExpandMore
              className={
                !showFirst ? `${renderFirst.current && "downFirst"}` : "upFirst"
              }
            />
            {
              <div
                className={
                  !showFirst
                    ? `reservation-inner-form-item-dropdown ${
                        renderFirst.current && "close"
                      }`
                    : "reservation-inner-form-item-dropdown open"
                }
              >
                <div className="reservation-inner-form-item-dropdown-item">
                  Hour
                </div>
                <div className="reservation-inner-form-item-dropdown-item">
                  Minute
                </div>
                <div className="reservation-inner-form-item-dropdown-item">
                  Second
                </div>
              </div>
            }
          </div>
          <div
            className={`reservation-inner-form-item ${showSecond && "orange"}`}
            onClick={() => {
              if (renderSecond.current === false) {
                renderSecond.current = true;
              }
              setShowSecond(!showSecond);
            }}
          >
            <input type="text" placeholder="Number Of People" />
            <MdOutlineExpandMore
              className={
                !showSecond
                  ? `${renderSecond.current && "downSecond"}`
                  : "upSecond"
              }
            />
            {
              <div
                className={
                  !showSecond
                    ? `reservation-inner-form-item-dropdown ${
                        renderSecond.current && "close"
                      }`
                    : "reservation-inner-form-item-dropdown open"
                }
              >
                <div className="reservation-inner-form-item-dropdown-item">
                  1
                </div>
                <div className="reservation-inner-form-item-dropdown-item">
                  2
                </div>
                <div className="reservation-inner-form-item-dropdown-item">
                  3
                </div>
              </div>
            }
          </div>
          <div className="reservation-inner-form-item">
            <input type="text" placeholder="Pick a Date" />
          </div>
          <div className="reservation-inner-form-item">
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="reservation-inner-form-item">
            <input type="text" placeholder="Name" />
          </div>
          <div className="reservation-inner-form-item">
            <input type="text" placeholder="Email Adress" />
          </div>
          <div className="reservation-inner-form-item comments">
            <input type="text" placeholder="Comments" />
          </div>
          <button>BOOK A TABLE</button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
