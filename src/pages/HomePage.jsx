import React from "react";
import Layout from "../components/Layout";
// import HeroSection from "../components/HeroSection";
import SimpleSlider from "../components/SimpleSlider";
import Category from "../components/Category";
const HomePage = () => {
  return (
    <div>
      <Layout>
        {/* <HeroSection /> */}
        <SimpleSlider />
        <Category />
      </Layout>{" "}
    </div>
  );
};

export default HomePage;
