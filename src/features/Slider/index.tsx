import { useState } from "react";
import { products } from "../../lib/products";

import SliderButton from "../../components/core/SliderButton";
import SliderTrack from "../../components/core/SliderTrack";


const CARD_WIDTH = 20;
const GAP = 20;
const VISIBLE = 4;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = products.length - VISIBLE;

  const next = () => index < maxIndex && setIndex(index + 1);
  const prev = () => index > 0 && setIndex(index - 1);

  return (
    <div className="relative w-full flex justify-center">
      <div className="overflow-hidden w-[1100px]">
        <SliderTrack index={index} />
      </div>

      <SliderButton side="left" onClick={prev} />
      <SliderButton side="right" onClick={next} />
    </div>
  );
};

export default Slider;