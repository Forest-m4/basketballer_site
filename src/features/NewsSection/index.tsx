import React from "react";
import NewsCard from "../../components/core/NewsCard";
import { newsData } from "../../lib/news";

const NewsSection: React.FC = () => {
  return (
    <div className="flex gap-[20px] justify-center mt-6 flex-wrap">
      {newsData.map((item, index) => (
        <NewsCard key={index} {...item} />
      ))}
    </div>
  );
};

export default NewsSection;