import React from "react";
import { type Product } from "../../../lib/products";
import Typography from "../../ui/Typography";
import ArrowIcon from "../ArrowIcon";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, description, price, discount, imageUrl } = product;

  return (
    <div className="w-[260px] h-[417px] bg-white rounded-lg shadow-md p-1 flex flex-col gap-4">
      <div className="pt-2"></div>

      <div className="h-10 flex items-center justify-center">
        <Typography
          type="h3"
          variant="16-900"
          color="black"
          className="text-center"
        >
          {title}
        </Typography>
      </div>

      <div className="w-full h-60 flex justify-center items-center rounded-md overflow-hidden mb-3">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="h-[50px] flex items-center justify-center">
        <Typography
          type="p"
          variant="12-400"
          color="secondary"
          className="text-center"
        >
          {description}
        </Typography>
      </div>

      {/* Блок с ценами с фиксированной высотой */}
      <div className="relative flex justify-between items-end mt-auto mb-6 px-6 h-[60px]">
        {discount && (
          <div className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2">
            <Typography
              type="span"
              variant="14-400"
              color="black"
              className="line-through opacity-80"
            >
              {price + discount} ₽
            </Typography>
          </div>
        )}

        <div className="flex flex-col gap-1">
          <Typography type="span" variant="18-700" className="text-primary">
            {price} ₽
          </Typography>
        </div>

        <ArrowIcon color="#EC4899" width={32} height={22} direction="right" />
      </div>
    </div>
  );
};

export default ProductCard;
