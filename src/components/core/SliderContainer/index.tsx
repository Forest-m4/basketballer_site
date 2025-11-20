import { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

const SliderContainer = ({ children }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-scroll cursor-grab active:cursor-grabbing px-1"
      style={{
        overflowY: "hidden",
        width: "80%",          
        margin: "0 auto",     
        paddingBottom: 28,    
      }}
      id="slider-scroll-element"
    >
      {children}
    </div>
  );
};

export default SliderContainer;