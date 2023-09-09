import OurSpecialMenu from "./our-special-menu/OurSpecialMenu";
import Order from "../order/Order";
import LatestNews from "./latestNews/LatestNews";
import BestChefSlider from "./bestChefSlider/BestChefSlider";
import SliderAnimations from "./sliderAnimations/SliderAnimations";
import Speciality from "./speciality/Speciality";
import CustomerReviews from "../customerReviews/CustomerReviews";

const Home = () => {
  return (
    <>
      <SliderAnimations />
      <Order />
      <Speciality />
      <OurSpecialMenu />
      <BestChefSlider />
      <LatestNews />
      <CustomerReviews />
    </>
  );
};

export default Home;
