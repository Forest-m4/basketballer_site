import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection"
import Slider from "./features/Slider"
import NewsSection from "./features/NewsSection"
import FeatureSection from "./features/FeatureSection"
import Header from "./features/HeaderSection";
function App() {
  return (
    <>
<Header bgColor="white" textColor="secondary" />
      <HeroSection />
      <HotSection/>
      <Slider/>
      <NewsSection/>
      <ProductCatalog />
      <FeatureSection/>
      <Header bgColor="secondary" textColor="white" />
    </>
  );
}

export default App;
