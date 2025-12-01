import React from "react";
import { products } from "../../lib/products";
import ProductCard from "../../components/core/ProductCard";
import Typography from "../../components/ui/Typography";
import { twMerge } from "tailwind-merge";

export type ProductCatalogProps = React.HTMLAttributes<HTMLDivElement>;

const ProductCatalog: React.FC<ProductCatalogProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge("flex flex-col gap-[50px] px-20", className)}
    >
      <Typography variant="25-900" type="h2">
        Каталог товаров
      </Typography>

      <div
        className="
          flex flex-wrap 
          gap-10 
          justify-center
        "
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
