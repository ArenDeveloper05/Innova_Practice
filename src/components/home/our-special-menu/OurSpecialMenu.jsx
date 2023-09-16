import "./OurSpecialMenu.scss";
import MenuChangeButton from "./menu-change-buttton/MenuChangeButton";
import MenuAssortmant from "./menu-assortmant/MenuAssortmant";
//images
import top from "../../../assets/images/menu-top-bg.png"
import bottom from "../../../assets/images/menu-bottom-bg.png"
const OurSpecialMenu = () => {

    return (
        <div className="special-menu-section">
            <img src={top} alt="top" />
            <section className="special-menu">
                <div className="special-menu-inner">
                    <div className="special-menu-inner-info">
                        <p>Fresh From Pizzon</p>
                        <h1>OUR SPECIAL MENU</h1>
                        <MenuChangeButton />
                    </div>
                    <MenuAssortmant />
                </div>
            </section>
            <img src={bottom} alt="bottom" className="bottom" />
        </div>
    )
}

export default OurSpecialMenu;
