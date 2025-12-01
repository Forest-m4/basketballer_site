import React from "react";

type RectangleProps = {
  width?: string;
  height?: string;
  opacity?: number;
  className?: string;
};

const Rectangle: React.FC<RectangleProps> = ({
  width = "w-8",
  height = "h-3",
  opacity = 1,
  className = "",
}) => {
  return (
    <div
      className={`${width} ${height} bg-white rounded-sm ${className}`}
      style={{ opacity }}
    />
  );
};

export default Rectangle;
