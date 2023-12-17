
import BasicBanner from "../common/BasicBanner";
import MenuList from "./menuList/MenuList";
import banner from "../../assets/images/MenuImages/menu-banner-1.png";
import BestChefSlider from "../../components/home/bestChefSlider/BestChefSlider"

const Menu = () => {
  return (
    <div>
       <BasicBanner title= "FOOD MENUS" pageName=" Menu 1" backgroundImage ={banner}/>
        <MenuList />
        <BestChefSlider />

    </div>
  )
}



export default Menu;