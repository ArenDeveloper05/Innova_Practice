const FooterContactItem = ({ item }) => {
  return (
    <div className="footer-container-contact-description-item">
      <span className="footer-container-contact-description-item-text">
        {item.text.text_title}
        <span className="footer-container-contact-description-item-text-info">
          {item.text.text_info_1}
        </span>
        <span className="footer-container-contact-description-item-text-info">
          {item.text.text_info_2}
        </span>
      </span>
    </div>
  );
};

export default FooterContactItem;
