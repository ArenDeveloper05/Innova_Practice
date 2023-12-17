import { useSelector } from "react-redux";
import footerLogo from "../../../../assets/images/FooterImages/footer-logo.png";
import FooterContactItem from "./footerContactItem/FooterContactItem";

const FooterContact = () => {
  const footerContact = useSelector((state) => {
    return state.footerContact.footer_contact_arr;
  });

  return (
    <div className="footer-container-contact">
      <img src={footerLogo} alt="Footer_Logo" />

      <div className="footer-container-contact-description">
        {footerContact.map((item) => {
          return <FooterContactItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default FooterContact;
