import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuAssortmant = () => {
    const menu = useSelector((state) => state.menu.menu);

    return (
        <div className="special-menu-inner-assortmant">
            {menu.map((item) => {
                return <div key={item.id} className="special-menu-inner-assortmant-item">
                    <Link>
                        <img src={item.image} alt="img" />
                        <h3>{item.title}</h3>
                        <p>{item.info}</p>
                        <p className="price">{item.price}</p>
                    </Link>
                </div>
            })}
        </div>
    )
}

export default MenuAssortmant;