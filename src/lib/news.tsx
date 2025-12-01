import { NewsCardProps } from "../components/core/NewsCard";

type NewsDataItem = NewsCardProps & {
  id: number;
};

export const newsData: NewsDataItem[] = [
  {
    id: 1,
    image: "/images/products/jump.jpg",
    mainText: "Поступление новых кроссовок",
    subText: "AIT JORDAN снова в моде!",
    colorOverlay: "blue",
    showPlus: true,
  },
  {
    id: 2,
    image: "/images/products/human.jpg",
    mainText: "Наконец-то ADIDAS постарался",
    subText: "ADIDAS выпустила мяч для любого покрытия!",
    colorOverlay: "purple",
    showPlus: true,
  },
];
