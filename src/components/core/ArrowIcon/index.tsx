import React from "react";

interface ArrowIconProps {
  color?: string;
  width?: number;
  height?: number;
  direction?: "left" | "right" | "up" | "down";
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ 
  color = "#EC4899", 
  width = 32, 
  height = 22,
  direction = "right"
}) => {
  const rotation = {
    right: "0",
    left: "180",
    up: "270", 
    down: "90"
  };

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 32 22" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
      style={{ transform: `rotate(${rotation[direction]}deg)` }}
    >
      {/* Более тонкая стрелка */}
      <path 
        d="M30 11L2 11M30 11L20 1M30 11L20 21" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;