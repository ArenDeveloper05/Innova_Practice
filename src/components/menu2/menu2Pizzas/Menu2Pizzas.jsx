import React from 'react'
import { useSelector } from 'react-redux';

const Menu2Pizzas = () => {
    const pizzasMenu = useSelector(state => state.menu2.pizzasMenu);
  return (
    <div className='menu2-menu-pizzas-info'>
        {pizzasMenu.map(({image, info, title, price}, index) => {
            return (
                <div className="menu2-menu-pizzas-info-pizza">
                    <div className="menu2-menu-pizzas-info-pizza-image">
                        <img src={image} alt="Pizza" />
                    </div>
                    <div className="menu2-menu-pizzas-info-pizza-title">
                        <div className="menu2-menu-pizzas-info-pizza-title-heading">
                            <h3>{title}</h3>
                            <h3><b>{price}</b></h3>
                        </div>
                        <div className="menu2-menu-pizzas-info-pizza-title-section">
                            <span>{info}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Menu2Pizzas