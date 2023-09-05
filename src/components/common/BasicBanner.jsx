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
        <div className="basicbanner-center">
          <h1 className="basicbanner-center-title"> {props.title} </h1>
          <ul className="basicbanner-center-pages">
            <li>
              <a href="/">Home</a>
            </li>
            <span>/</span>
            <li>{props.pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BasicBanner;
