import { useRef } from "react";
import SliderContainer from "../../components/core/SliderContainer";
import SliderTrack from "../../components/core/SliderTrack";
import SliderArrows from "../../components/core/SliderArrows";
import { products } from "../../lib/products";

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="relative w-full">
        <SliderArrows sliderRef={sliderRef} />
        <SliderContainer sliderRef={sliderRef}>
          <SliderTrack products={products} />
        </SliderContainer>
      </div>
    </div>
  );
};

export default Slider;
