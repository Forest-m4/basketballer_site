import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection";
import Slider from "./features/Slider";
import NewsSection from "./features/NewsSection";
import FeatureSection from "./features/FeatureSection";
import Header from "./features/Header";
function App() {
  return (
    <>
      <Header variant="light" />
      <HeroSection />
      <HotSection/>
      <Slider/>
      <NewsSection/>
      <ProductCatalog />
      <FeatureSection/>
      <Header variant="dark"  />



    </>
  );
}

export default App;
