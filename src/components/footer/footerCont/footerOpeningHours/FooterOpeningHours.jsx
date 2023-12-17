import { useSelector } from "react-redux";
import FooterOpeningHoursItem from "./footerOpeningHoursItem/FooterOpeningHoursItem";

const FooterOpeningHours = () => {
  const footerOpeningHours = useSelector((state) => {
    return state.footerOpeningHours.footer_opening_hours_arr;
  });

  return (
    <div className="footer-container-opening-hrs">
      <div className="footer-container-opening-hrs-titles">
        <h1 className="footer-container-opening-hrs-titles-title">
          opening hours
        </h1>
      </div>

      <div className="footer-container-opening-hrs-description">
        {footerOpeningHours.map((item) => {
          return <FooterOpeningHoursItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FooterOpeningHours;
