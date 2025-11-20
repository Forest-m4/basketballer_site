// components/Slider/Slider.tsx
import SliderContainer from "../../components/core/SliderContainer";
import SliderTrack from "../../components/core/SliderTrack";
import SliderArrows from "../../components/core/SliderArrows";
import { products } from "../../lib/products";

const Slider = () => {
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative w-full">
        <SliderArrows />
        <SliderContainer>
          <SliderTrack products={products} />
        </SliderContainer>
      </div>
    </div>
  );
};

export default Slider;