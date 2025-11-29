import React from "react";

type PlusIconProps = {
  className?: string;
};

const PlusIcon: React.FC<PlusIconProps> = ({ className }) => {
  return (
    <div
      className={`text-white text-5xl font-bold cursor-pointer ${className}`}
    >
      +
    </div>
  );
};

export default PlusIcon;
