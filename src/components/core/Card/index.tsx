import React from "react";
import { type Product } from "../../../lib/products";
import Typography from "../../ui/Typography";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, description, price, discount, imageUrl } = product;

  return (
    <div className="w-[260px] bg-white rounded-lg shadow-md p-4 flex flex-col gap-3">
      
      {/* Название по центру сверху */}
      <Typography
        type="h3"
        variant="16-900"
        className="text-center"
      >
        {title}
      </Typography>

      {/* Фото без обрезки */}
      <div className="w-full h-[200px] flex justify-center items-center rounded-md overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Маленький текст по центру */}
      <p className="text-sm text-gray-600 text-center">
        {description}
      </p>

      {/* Цена по центру */}
      <div className="flex flex-col items-center gap-1 mt-auto">
        {discount && (
          <span className="text-black-500 text-sm line-through opacity-80">
            {price + discount} ₽
          </span>
        )}
        <span className="font-bold text-[18px] text-blue-500">{price} ₽</span>
      </div>
    </div>
  );
};

export default ProductCard;