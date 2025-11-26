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
    <div className="w-[260px] bg-white rounded-lg shadow-md p-2 flex flex-col gap-1">
      <div className="pt-4"></div>
      
      <Typography
        type="h3"
        variant="16-900"
        color="black"
        className="text-center"
      >
        {title}
      </Typography>

      <div className="w-full h-[190px] flex justify-center items-center rounded-md overflow-hidden mb-3">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <Typography
        type="p"
        variant="14-400"
        color="secondary"
        className="text-center"
      >
        {description}
      </Typography>

      <div className="relative flex justify-between items-end mt-auto mb-6 px-4 pt-12"> 
        {discount && (
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 pt-10"> 
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
          <Typography
            type="span"
            variant="18-700"
            color="primary"
          >
            {price} ₽
          </Typography>
        </div>
        
        <ArrowIcon color="#EC4899" width={32} height={22} direction="right" />
      </div>
    </div>
  );
};

export default ProductCard;