import React from 'react'
import { useSelector } from 'react-redux'
//icons  
import {ImFilter} from "react-icons/im"

const OrderOnlineFilter = () => {
    const filterButtons = useSelector(state => state.orderOnline.filterButtons);
    console.log(filterButtons);
  return (
    <div className='orderOnline-menu-filter-container'>
        <nav>
          <ul>
            <li className='filter'><ImFilter /><span> Filter</span></li>
            {filterButtons && filterButtons.map(({title, options}, index) => {
              return (
                <li key={index}>
                  <select>
                    {options && options.map((option, id) => {
                      return (
                        <option selected={id === 0} disabled={id === 0} key={id} value="option">
                          {option}
                        </option>
                      )
                    })}
                  </select>
                </li>
              )
            })}
          </ul>
        <span className='showed'>Showing 1–12 of 28 Results</span>
        </nav>
    </div>
  )
}

export default OrderOnlineFilter