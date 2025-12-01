import ProductCard from "../ProductCard";
import { Product } from "../../../lib/products";

interface Props {
  products: Product[];
}

const SliderTrack = ({ products }: Props) => {
  return (
    <div className="flex snap-x snap-mandatory gap-4 w-max">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SliderTrack;
