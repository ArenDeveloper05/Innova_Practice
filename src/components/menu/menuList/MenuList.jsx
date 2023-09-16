import { useDispatch, useSelector } from "react-redux";
import { menuPageFilter } from "../../../redux/slices/menuPageSlice";
import "./MenuList.scss"
import { useState } from "react";
const MenuList = () => {
  const filteredItems = useSelector((state) => state.menuPage.filteredItems);
  const dispatch = useDispatch();
  function sort(type, filterItemIndex) {
    setFilter(filter.map((item, index) => {
      filterItemIndex === index
        ? (item.isActive = true)
        : (item.isActive = false);
        return item;
    }));
    dispatch(menuPageFilter({ type: type }));
  }
  const [filter, setFilter] = useState([
    {
      name: "ALL",
      isActive: true
},
{
  name: "DRINKS",
  isActive: false
},
{
  name: "SALADS",
  isActive: false
},
{
  name: "PASTA",
  isActive: false
},
{
  name: "BURGERS",
  isActive: false
},
{
  name: "DESERT",
  isActive: false
},
{
  name: "PIZZAS",
  isActive: false
}
])
  return (
    <section className="menulist">
      
      <div className="menulist-sort">
       
       <ul className="menulist-sort-center">{filter.map(({name, isActive}, index) =>{
         return  <li className={`${isActive?'active':''}`} onClick={()=> sort(name, index)}>{name}</li>
        })}
        </ul> 
      
      </div>
      <div className="menulist-sort-result">
        {filteredItems.map((item) => {
          return (
            <div className="menulist-sort-result-item">
            <div className="img">
             <img src={item.img} alt="pizza"/>
            </div>
            <div className="description">
              <h1>{item.name}</h1>
              <p>{item.ing.map((ingredient, index)=>{return index===0? ingredient:' / '+ingredient;})}</p>
              <p>{item.details}</p>
              </div>
              <a href="#" className="order">ORDER NOW</a>
            </div>
          );
        })}
      </div>
   
    </section>
  )
}

export default MenuList;