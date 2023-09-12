import React from 'react'
import { useSelector } from 'react-redux'

const OrderOnlinePizzas = () => {
  const orderOnlinePizzas = useSelector(state => state.orderOnline.OrderOnlinePizzas)
  return (
    <div className='orderOnline-menu-pizzas-container'>
      <h2>Active Filters</h2>
      <div className="orderOnline-menu-pizzas-container-cards">
        {orderOnlinePizzas && orderOnlinePizzas.map(({image, pizzaName, price, title},index) => {
          return (
            <div key={index} className="orderOnline-menu-pizzas-container-cards-card">
              <img src={image} alt="Pizza" />
              <h3>{pizzaName}</h3>
              <span>{title}</span>
              <b>{price}</b>
              <button>ORDER ONLINE</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderOnlinePizzas