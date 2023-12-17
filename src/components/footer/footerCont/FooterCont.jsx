import FooterContact from "./footerContact/FooterContact";
import FooterOpeningHours from "./footerOpeningHours/FooterOpeningHours";
import FooterUsefulLinks from "./footerUsefulLinks/FooterUsefulLinks";

const FooterCont = () => {
  return (
    <div className="footer-container">
      <FooterContact />
      <FooterOpeningHours />
      <FooterUsefulLinks />
    </div>
  );
};

export default FooterCont;
