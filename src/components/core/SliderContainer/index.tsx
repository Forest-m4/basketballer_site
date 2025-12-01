import { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  sliderRef: React.RefObject<HTMLDivElement | null>;
}

const SliderContainer = ({ children, sliderRef }: Props) => {
  const [isDown, setIsDown] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    setIsDown(true);
    startXRef.current = e.pageX - slider.offsetLeft;
    scrollLeftRef.current = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();

    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startXRef.current) * 1;
    slider.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div
      role="application"
      aria-label="Content slider container"
      className="w-full"
    >
      <div
        ref={sliderRef}
        className="overflow-x-scroll cursor-grab active:cursor-grabbing px-1"
        style={{
          overflowY: "hidden",
          width: "80%",
          margin: "0 auto",
          paddingBottom: 28,
        }}
      >
        {children}
      </div>

      {/* Скрытые интерактивные элементы для доступности */}
      <button
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        aria-hidden="true"
        tabIndex={-1}
        style={{
          position: "absolute",
          width: "80%",
          height: "100%",
          opacity: 0,
          cursor: "grab",
          margin: "0 auto",
          left: "10%",
          right: "10%",
          top: 0,
        }}
        className="active:cursor-grabbing"
      />
    </div>
  );
};

export default SliderContainer;
