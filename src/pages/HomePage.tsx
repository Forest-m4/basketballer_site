import React from "react";
import HeroSection from "../features/hero";
import HotSection from "../features/HotSection";
import Slider from "../features/Slider";
import NewsSection from "../features/NewsSection";
import ProductCatalog from "../features/ProductCatalog";
import FeatureSection from "../features/FeatureSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HotSection />
      <Slider />
      <NewsSection />
      <ProductCatalog />
      <FeatureSection />
    </>
  );
};

export default HomePage;
