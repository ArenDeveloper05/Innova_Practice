import React from "react";
//icons
import { BsPhoneVibrate } from "react-icons/bs";
//styles
import "./BookOnline.scss";
const BookOnline = () => {
  return (
    <section className="bookOnline-section">
      <div className="bookOnline">
        <div className="bookOnline-title">
          <h2>Fresh From Pizzon</h2>
          <h1>BOOK ONLINE</h1>
          <span>
            Sit amet, consectetur adipiscing elit quisque eget maximus velit,
            non eleifend libero curabitur dapibus mauris sed leo cursus
            aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque
            eget maximus velit, non eleifend libero curabitur
          </span>
          <div className="bookOnline-title-phone">
            <BsPhoneVibrate />
            <span>+ 91 123 456 789 0 </span>
          </div>
        </div>
        <form className="bookOnline-form">
          <h4>BOOK A TABLE</h4>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <select id="persons">
            <option value="Person5">Person5</option>
            <option value="Person4">Person4</option>
            <option value="Person3">Person3</option>
          </select>
          <input type="text" placeholder="Date" />
          <button>Book Now</button>
        </form>
      </div>
    </section>
  );
};

export default BookOnline;
