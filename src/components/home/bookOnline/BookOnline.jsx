
import { useRef } from "react";
import "./BookOnline.scss";
import {SlScreenSmartphone} from 'react-icons/sl'


const BookOnline = () => {
  return (
    
    <div className="BookOnline">
        <div className="BookOnline-info">
            <h3>Fresh From Pizzon</h3>
            <h1>BOOK ONLINE </h1>
            <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit
               non eleifend.libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit.
               Sit amet, consectetur adipiscing elit quisque eget maximus velit,
               non eleifend libero curabitur
            </p>
            <button><SlScreenSmartphone/>+91 123 456 789 0</button>
        </div>
        <div className="BookOnline-bookNow">
            <p>BOOK A TABLE</p>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="person"/>
            <input type="text"placeholder="Date"/>
            <button>BOOK NOW</button>
        </div>
    </div>
  )
}

export default BookOnline