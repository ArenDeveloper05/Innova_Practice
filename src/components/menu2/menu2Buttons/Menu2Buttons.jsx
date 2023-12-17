import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filteredMenu2State } from '../../../redux/slices/menu2Slice';

const Menu2Buttons = () => {
    const buttonsState = useSelector((state) => state.menu2.buttons)
    const dispatch = useDispatch();

    function assortmants(type) {
        dispatch((filteredMenu2State({ type })));
    }
    return (
        <div className="menu2-menu-buttons-container">
            {
                buttonsState && buttonsState.map(({ id, title, type }) => {
                    return <div key={id} className="menu2-menu-buttons-container-item" onClick={(e) => {
                        e.target.parentNode.childNodes.forEach(child => {
                        child.style.color = "#121619";
                        child.style.backgroundColor = "#ebebeb"
                        });
                        e.target.style.backgroundColor = "var(--bs-orange)";
                        console.log(e.target.childNodes);
                        e.target.style.color = "#fff";
                        e.target.style.borderRadius = "50px"
                        assortmants(type);
                    }}>{title}</div>
                })
            }
        </div>
    )
}

export default Menu2Buttons