import React from "react";

interface SliderArrowsProps {
  sliderRef: React.RefObject<HTMLDivElement | null>;
}

const SliderArrows = ({ sliderRef }: SliderArrowsProps) => {
  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const amount = 300;

    slider.scrollTo({
      left:
        direction === "left"
          ? slider.scrollLeft - amount
          : slider.scrollLeft + amount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 -translate-y-1/2 
        bg-white/80 backdrop-blur px-4 py-2 rounded-full 
        hover:bg-white text-5xl font-light select-none z-10
        left-15"
        aria-label="Scroll left"
      >
        &lt;
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 
        bg-white/80 backdrop-blur px-4 py-2 rounded-full 
        hover:bg-white text-5xl font-light select-none z-10
        right-15"
        aria-label="Scroll right"
      >
        &gt;
      </button>
    </>
  );
};

export default SliderArrows;
