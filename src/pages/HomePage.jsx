import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import Category from "../components/Category";

const HomePage = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Category />
      </Layout>{" "}
    </div>
  );
};

export default HomePage;
