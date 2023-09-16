import React from 'react'
import { Link } from 'react-router-dom';
//image
import backgroundImage from "../../assets/images/Menu2Images/menu2-banner-1.png"
import BestChefSlider from '../home/bestChefSlider/BestChefSlider';
import BookOnline from '../home/bookOnline/BookOnline';
//styles
import "./Menu2.scss"
import Menu2Buttons from './menu2Buttons/Menu2Buttons';
import Menu2Pizzas from './menu2Pizzas/Menu2Pizzas';
const Menu2 = () => {

  return (
        <section className='menu2-section'>
        <div className="menu2">
            <div className="menu2-heading-modal" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="menu2-heading">
                    <h1>FOOD MENUS</h1>
                    <div className="menu2-heading-pages">
                        <Link to="/">Home </Link>
                        <span>/</span>
                        <span>Menu 2</span>
                    </div>
                </div>
            </div>
            <div className="menu2-menu">
                <div>
                    <div className="menu2-menu-buttons">
                        <Menu2Buttons />
                    </div>
                    <div className="menu2-menu-pizzas">
                        <Menu2Pizzas />
                    </div>
                </div>
            </div>
            <div className="menu2-chefs">
                <BestChefSlider />
            </div>
            <div className="menu2-bookOnline">
                <BookOnline />
            </div>
        </div>
        </section>
        )
}

export default Menu2