import React from "react";

type ColorOverlayProps = {
  type: "blue" | "purple";
  className?: string;
};

const gradients: Record<"blue" | "purple", string> = {
  blue: "bg-gradient-to-b from-[rgba(49,69,255,0.85)] to-[rgba(49,69,255,0.55)]",
  purple: "bg-gradient-to-b from-[#8C00FBC2] to-[#D61EF44F]",
};

const ColorOverlay: React.FC<ColorOverlayProps> = ({ type, className }) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full h-full pointer-events-none ${gradients[type]} ${className}`}
    />
  );
};

export default ColorOverlay;