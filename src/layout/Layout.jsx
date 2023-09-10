import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Your Footer */}
    </>
  );
};

export default Layout;
