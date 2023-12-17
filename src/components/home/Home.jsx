import Order from "../order/Order";
import LatestNews from "./latestNews/LatestNews";
import BestChefSlider from "./bestChefSlider/BestChefSlider";
import SliderAnimations from "./sliderAnimations/SliderAnimations";
import Speciality from "./speciality/Speciality";

const Home = () => {
  return (
    <div>
      <SliderAnimations />
      <Order />
      <Speciality />
      <BestChefSlider />
      <LatestNews />
    </div>
  );
};

export default Home;
