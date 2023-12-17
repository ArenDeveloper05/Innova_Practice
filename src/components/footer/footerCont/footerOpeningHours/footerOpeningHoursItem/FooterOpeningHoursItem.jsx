const FooterOpeningHoursItem = ({ item }) => {
  return (
    <div className="footer-container-opening-hrs-description-item">
      <span className="footer-container-opening-hrs-description-item-text">
        {item.day.day_title}
        <span
          className={
            item.day.day_hour.includes("Closed")
              ? "footer-container-opening-hrs-description-item-text-closed"
              : ""
          }
        >
          {item.day.day_hour}
        </span>
      </span>
    </div>
  );
};

export default FooterOpeningHoursItem;
