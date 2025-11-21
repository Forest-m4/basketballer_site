import React from "react";
import ColorOverlay from "../ColorOverlay";

interface PromoBackgroundProps {
  imageSrc: string;
  className?: string;
}

const PromoBackground: React.FC<PromoBackgroundProps> = ({ imageSrc, className }) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={imageSrc}
        alt="фон"
        className="w-full h-full object-cover filter grayscale brightness-50"
      />
      <ColorOverlay type="blue" />
    </div>
  );
};

export default PromoBackground;