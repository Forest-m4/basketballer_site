import React, { useEffect, useRef, useState } from "react";

export interface SliderItem {
  id: string | number;
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

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const track = trackRef.current;
    if (!track) return;
    const value = parseInt(e.target.value);
    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({ left: (maxScroll * value) / 100, behavior: "smooth" });
  };

  const handleThumbDrag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const startX = e.clientX;
    const startScroll = track.scrollLeft;

    const moveThumb = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const trackWidth = track.clientWidth;
      const percentageDelta = (deltaX / trackWidth) * 100;
      const newScroll = startScroll + (maxScroll * percentageDelta) / 100;
      track.scrollLeft = Math.max(0, Math.min(newScroll, maxScroll));
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", moveThumb);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", moveThumb);
    document.addEventListener("mouseup", stopDrag);
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

      {/* Нативный input range для управления скроллом */}
      <div className="mt-6 mx-auto w-64">
        <input
          type="range"
          min="0"
          max="100"
          value={scrollProgress}
          onChange={handleSliderChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          aria-label="Slider to control horizontal scroll"
        />

        {/* Дополнительная кнопка для перетаскивания (опционально) */}
        <button
          type="button"
          className="mt-2 mx-auto block w-6 h-6 bg-gray-500 rounded-sm cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-blue-500"
          onMouseDown={handleThumbDrag}
          aria-label="Drag to scroll horizontally"
        />
      </div>
    </div>
  );
};

export default SliderTrack;
