import { useSelector } from "react-redux";
import FooterUsefulLinksItem from "./footerUsefulLinksItem/FooterUsefulLinksItem";

const FooterUsefulLinks = () => {
  const footerUsefulLinks = useSelector((state) => {
    return state.footerUsefulLinks.footer_useful_links_arr;
  });

  console.log(footerUsefulLinks);

  return (
    <div className="footer-container-useful-links">
      <div className="footer-container-useful-links-titles">
        <h1 className="footer-container-useful-links-titles-title">
          useful links
        </h1>
      </div>

      <div className="footer-container-useful-links-description">
        {footerUsefulLinks.map((item) => {
          return <FooterUsefulLinksItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FooterUsefulLinks;
