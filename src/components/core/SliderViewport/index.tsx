import React, { useEffect, useRef, useState } from "react";

export interface SliderItem {
  id: string | number; // <- теперь id может быть числом
  content: React.ReactNode;
}

interface Props {
  items: SliderItem[];
}

const SliderTrack = ({ items }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);
  };

  const handleThumbDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    const progressBar = e.currentTarget.parentElement;
    if (!track || !progressBar) return;

    const progressBarRect = progressBar.getBoundingClientRect();
    const maxScroll = track.scrollWidth - track.clientWidth;

    const moveThumb = (moveEvent: MouseEvent) => {
      let newX = moveEvent.clientX - progressBarRect.left;
      newX = Math.max(0, Math.min(newX, progressBarRect.width));
      const percentage = newX / progressBarRect.width;
      track.scrollLeft = maxScroll * percentage;
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", moveThumb);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", moveThumb);
    document.addEventListener("mouseup", stopDrag);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const progressBarRect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - progressBarRect.left;
    const percentage = clickX / progressBarRect.width;
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: maxScroll * percentage, behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      track.scrollBy({ left: 20, behavior: "smooth" });
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      track.scrollBy({ left: -20, behavior: "smooth" });
    } else if (e.key === "Home") {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else if (e.key === "End") {
      track.scrollTo({ left: maxScroll, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateScrollProgress);
    return () => track.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <div ref={trackRef} className="flex gap-6 overflow-x-auto py-4">
        {items.map((item) => (
          <div key={item.id} className="shrink-0">
            {item.content}
          </div>
        ))}
      </div>

      <div
        className="mt-6 mx-auto w-64 h-2 bg-gray-200 rounded relative cursor-pointer"
        onClick={handleProgressClick}
      >
        <div
          role="slider"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          className="absolute top-0 w-6 h-6 bg-gray-500 rounded-sm transform -translate-y-1/2 cursor-grab active:cursor-grabbing"
          style={{ left: "calc(${scrollProgress}% - 12px)" }}
          onMouseDown={handleThumbDrag}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default SliderTrack;
