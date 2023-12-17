import "./AboutPizzon.scss";
import aboutPizzonBcg from "../../../assets/images/AboutPizzon/about-pizzon-bg.png";
import AboutPizzonInfo from "./aboutPizzonInfo/AboutPizzonInfo";

const AboutPizzon = () => {
  return (
    <div className="about-pizzon">
      <div className="about-pizzon-bcg">
        <img
          src={aboutPizzonBcg}
          alt="About_Pizzon_Bcg"
          className="about-pizzon-bcg-img"
        />
      </div>

      <AboutPizzonInfo />
    </div>
  );
};

export default AboutPizzon;
