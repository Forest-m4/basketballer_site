import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection"
import Slider from "./features/Slider"
import NewsSection from "./features/NewsSection"
function App() {
  return (
    <>
      <HeroSection />
      <HotSection/>
      <Slider/>
      <NewsSection/>
      <ProductCatalog />
    </>
  );
}

export default App;
