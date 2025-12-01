import React from "react";

interface TriangleDownIconProps {
  color?: string;
  size?: number;
  className?: string;
}

const TriangleDownIcon: React.FC<TriangleDownIconProps> = ({
  color = "#000000",
  size = 16,
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M8 12L3 6L13 6L8 12Z" fill={color} />
    </svg>
  );
};

export default TriangleDownIcon;
