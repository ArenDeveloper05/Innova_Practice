import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Your Header */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
