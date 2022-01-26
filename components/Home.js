import React from "react";
import Layout from "./Layout/Layout";
import Blog from "./sectionHome/Blog";
import HeroSection from "./sectionHome/CarouselSection";
import Pricing from "./sectionHome/Maketing";
import Products from "./sectionHome/Product";
import Service from "./sectionHome/Service";
import Customers from "./sectionHome/CustomersSay";

const index = () => {
  return (
    <Layout className="xcontainer">
      <HeroSection />
      <Customers />
      <Products />
      <Blog />
      <Pricing />
      <Service />
    </Layout>
  );
};

export default index;
