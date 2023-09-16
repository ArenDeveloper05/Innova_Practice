import { useDispatch, useSelector } from "react-redux"
// import { Link } from "react-router-dom"
import { filteredState } from "../../../../redux/slices/menuSlice";
// import MenuAssortmant from "../menu-assortmant/MenuAssortmant";

const MenuChangeButton = () => {
    // const buttons = useSelector((state) => state.menu.buttons);
    // console.log(buttons);
    const buttonsState = useSelector((state) => state.menu.buttons)
    console.log(buttonsState);
    const dispatch = useDispatch();

    function assortmants(type) {
        dispatch((filteredState({ type })));
    }

    return (
        <div className="menu-inner-info-button">
            {
                buttonsState && buttonsState.map(({ id, title, type }) => {
                    return <div key={id} className="menu-inner-info-button-item" onClick={() => {
                        assortmants(type)
                    }}>{title}</div>
                })
            }
        </div>
    )
}

export default MenuChangeButton;