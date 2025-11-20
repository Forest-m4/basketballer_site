import React from "react";
import PlusIcon from "../PlusIcon";
import ColorOverlay from "../ColorOverlay";
import Typography from "../../ui/Typography";

export type NewsCardProps = {
  image: string;
  mainText: string;
  subText: string;
  colorOverlay?: "blue" | "purple";
  showPlus?: boolean;
};

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  mainText,
  subText,
  colorOverlay = "blue",
  showPlus = false,
}) => {
  return (
    <div className="relative w-[567px] h-[469px] flex-shrink-0 rounded-md overflow-hidden">
      <img src={image} alt="" className="w-full h-full object-cover" />

      <ColorOverlay type={colorOverlay} />

      {showPlus && (
        <PlusIcon className="absolute top-3 right-3 z-20" />
      )}

        <div className="absolute bottom-14 left-16 text-white max-w-[260px]">
            <div className="text-[20px] font-extrabold leading-tight">
                {mainText}
            </div>

        <div className="text-[16px] mt-3 leading-snug">
                {subText}
        </div>
</div>
    </div>
  );
};

export default NewsCard;