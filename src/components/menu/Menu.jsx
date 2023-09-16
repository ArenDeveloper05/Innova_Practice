
import BasicBanner from "../common/BasicBanner";
import MenuList from "./menuList/MenuList";
import banner from "../../assets/images/MenuImages/menu-banner-1.png"
const Menu = () => {
  return (
    <div>
       <BasicBanner title= "FOOD MENUS" pageName=" Menu 1" backgroundImage ={banner}/>
        <MenuList />
    </div>
  )
}



export default Menu;