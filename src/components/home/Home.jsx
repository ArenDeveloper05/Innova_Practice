
import Order from "../order/Order";
import LatestNews from "./latestNews/LatestNews";

import SliderAnimations from "./sliderAnimations/SliderAnimations";
import Speciality from "./speciality/Speciality";

const Home = () => {
  return <div>
    <SliderAnimations />
    <Order />
    <Speciality />
    <LatestNews />
  </div>
};

export default Home;
