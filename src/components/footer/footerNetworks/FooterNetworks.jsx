import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

const FooterNetworks = () => {
  const footerNetworksIcons = [
    FaFacebookF,
    AiOutlineTwitter,
    BiLogoLinkedin,
    AiOutlineInstagram,
  ];

  return (
    <div className="footer-networks">
      <span className="footer-networks-title">
        © Pizzon all Rights Reserved. Designed by
        <a
          href="https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/index.html#"
          className="footer-networks-title-link"
        >
          TemplatesCoder
        </a>
      </span>

      <div className="footer-networks-icons">
        {footerNetworksIcons.map((Network, index) => {
          return (
            <a href="" className="footer-networks-icons-link">
              <Network
                key={index}
                className="footer-networks-icons-link-icon"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNetworks;
