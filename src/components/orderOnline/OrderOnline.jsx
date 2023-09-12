import React from 'react'
import { Link } from 'react-router-dom'
import OrderOnlineFilter from './orderOnlineFilter/OrderOnlineFilter'
import OrderOnlinePizzas from './orderOnlinePizzas/OrderOnlinePizzas'
//images
import backgroundImage from "../../assets/images/OrderOnline/blog-9.jpg"
import crust from "../../assets/images/OrderOnline/crust.jpg"
//styles 
import "./OrderOnline.scss"
const OrderOnline = () => {
  return (
    <section className='orderOnline-section'>
            <div className="orderOnline">
                <div className="orderOnline-heading-modal" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="orderOnline-heading">
                        <h1>Order Online</h1>
                        <div className="orderOnline-heading-pages">
                            <Link to="/">Home </Link>
                            <span>/</span>
                            <span>Order Online</span>
                        </div>
                    </div>
                </div>
                <div className="orderOnline-crust">
                    <div className='orderOnline-crust-background' style={{ backgroundImage: `url(${crust})` }}>
                        <div className="orderOnline-crust-title">
                            <h1>PIZZA CRUST & <b>TORTILLAS</b></h1>
                            <h6>HIS CREATION SET OFF A HEATED DEBATE OVER WHETHER PINEAPPLE BELONGS ON PIZZA</h6>
                        </div>
                    </div>
                </div>
                <div className="orderOnline-menu">
                    <div>
                        <div className="orderOnline-menu-filter">
                            <OrderOnlineFilter />
                        </div>
                        <div className="orderOnline-menu-pizzas">
                            <OrderOnlinePizzas />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default OrderOnline