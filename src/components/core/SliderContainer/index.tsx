import { useRef, useState, forwardRef, RefObject } from "react";

interface Props {
  children: React.ReactNode;
}

const SliderContainer = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    const [isDown, setIsDown] = useState(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
      const slider = (ref as RefObject<HTMLDivElement>).current;
      if (!slider) return;

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
      const slider = (ref as RefObject<HTMLDivElement>).current;
      if (!isDown || !slider) return;
      e.preventDefault();

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
          ref={ref}
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
  }
);

SliderContainer.displayName = "SliderContainer";

export default SliderContainer;
