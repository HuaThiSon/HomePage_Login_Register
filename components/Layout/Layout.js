import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";

const Layout = ({ title, children }) => {
  return (
    <div>
      <title>{title}</title>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "House | House for Rent",
};
