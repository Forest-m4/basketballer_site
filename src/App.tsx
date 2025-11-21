import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection"
import Slider from "./features/Slider"
import NewsSection from "./features/NewsSection"
import FeatureSection from "./features/FeatureSection"
function App() {
  return (
    <>
      <HeroSection />
      <HotSection/>
      <Slider/>
      <NewsSection/>
      <ProductCatalog />
      <FeatureSection/>
    </>
  );
}

export default App;
