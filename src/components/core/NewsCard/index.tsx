import React from "react";
import PlusIcon from "../PlusIcon";
import ColorOverlay from "../ColorOverlay";
import SmallSquare from "../../ui/SmallSquare";

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
    <div className="relative w-[567px] h-[469px] shrink-0 rounded-md overflow-hidden">
      {/* Белый квадратик 5x5 в левом верхнем углу карточки */}
      <div className="absolute top-71 left-8 z-20">
        <SmallSquare size="lg" />
      </div>

      <img src={image} alt="" className="w-full h-full object-cover" />
      <ColorOverlay type={colorOverlay} />
      {showPlus && <PlusIcon className="absolute top-3 right-3 z-20" />}

      {/* Текстовый блок с разной шириной для верхнего и нижнего текста */}
      <div className="absolute bottom-14 left-16 text-white">
        <div className="max-w-60 text-[20px] font-extrabold leading-tight min-h-12 flex items-end">
          {mainText}
        </div>
        <div className="max-w-[400px] text-[16px] mt-3 leading-snug min-h-10 flex items-start">
          {subText}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
