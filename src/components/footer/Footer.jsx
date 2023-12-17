import "./Footer.scss";
import FooterCont from "./footerCont/FooterCont";
import FooterNetworks from "./footerNetworks/FooterNetworks";

const Footer = () => {
  return (
    <div className="footer">
      <FooterCont />
      <div className="footer-hr"></div>
      <FooterNetworks />
    </div>
  );
};

export default Footer;
