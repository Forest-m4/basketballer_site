import React from "react";
import NewsCard from "../../components/core/NewsCard";
import { newsData } from "../../lib/news";

const NewsSection: React.FC = () => {
  return (
    <div className="flex gap-10 justify-center mt-6 flex-wrap py-20 relative">
      {newsData.map((item) => {
        const { id, ...newsCardProps } = item; // Извлекаем id отдельно
        return (
          <NewsCard
            key={id} // Используем id только для key
            {...newsCardProps} // Передаем остальные пропсы без id
          />
        );
      })}
    </div>
  );
};
export default NewsSection;
