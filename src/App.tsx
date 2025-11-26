import { Routes, Route } from "react-router-dom";

import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection";
import Slider from "./features/Slider";
import NewsSection from "./features/NewsSection";
import FeatureSection from "./features/FeatureSection";
import Header from "./features/HeaderSection";
import LoginPage from "./features/LoginPage";
import RegisterPage from "./features/RegisterPage"
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header bgColor="white" logoTitleColor="primary" />
            <HeroSection />
            <HotSection />
            <Slider />
            <NewsSection />
            <ProductCatalog />
            <FeatureSection />
            <Header bgColor="secondary" textColor="white" />\

          </>
        }
      />
      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route 
      path="/register" 
      element={<RegisterPage />} />
    </Routes>
  );
}

export default App;