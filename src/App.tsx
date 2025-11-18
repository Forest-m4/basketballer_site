import ProductCatalog from "./features/ProductCatalog"; 
import HeroSection from "./features/hero";
import HotSection from "./features/HotSection"
import Slider from "./features/Slider"
function App() {
  return (
    <>
      <HeroSection />
      <HotSection/>
      <Slider/>
      <ProductCatalog />
    </>
  );
}

export default App;
