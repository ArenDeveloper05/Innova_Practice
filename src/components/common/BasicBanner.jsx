import "./BasicBanner.scss";

const BasicBanner = (props) => {
  return (
    <section
      className="basicbannerimg"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className="basicbanner">
        
      </div>
      <div className="center">
      <div className="center-basicbanner">
          <h1 className="center-basicbanner-title"> {props.title} </h1>
          <ul className="center-basicbanner-pages">
            <li>
              <a href="/">Home</a>
            </li>
            <span>/</span>
            <li>{props.pageName}</li>
          </ul>
        </div></div>
    </section>
  );
};

export default BasicBanner;
