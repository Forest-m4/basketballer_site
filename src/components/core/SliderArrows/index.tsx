const SliderArrows = () => {
  const scroll = (direction: "left" | "right") => {
    const slider = document.getElementById("slider-scroll-element");
    if (!slider) return;

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
        bg-white/80 backdrop-blur px-4 py-4 shadow rounded-full 
        hover:bg-white text-3xl font-bold select-none z-10
        left-15"  
      >
        &lt;
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 
        bg-white/80 backdrop-blur px-4 py-4 shadow rounded-full 
        hover:bg-white text-3xl font-bold select-none z-10
        right-15"  
      >
        &gt;
      </button>
    </>
  );
};

export default SliderArrows;