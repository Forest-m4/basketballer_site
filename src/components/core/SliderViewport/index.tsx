import { type PropsWithChildren } from "react";

const SliderViewport: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="overflow-hidden w-full">
      {children}
    </div>
  );
};

export default SliderViewport;