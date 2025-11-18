import ProductCard from "../../core/Card";
import { products, type Product } from "../../../lib/products";


const CARD_WIDTH = 260;
const GAP = 20;

interface Props {
  index: number;
}

const SliderTrack: React.FC<Props> = ({ index }) => {
  const offset = index * (CARD_WIDTH + GAP);

  return (
    <div
      className="flex gap-[50px] transition-transform duration-300"
      style={{
        transform: 'translateX(-${offset}px)',
      }}
    >
      {products.map((product) => (
        <div key={product.id} className="shrink-0 w-[220px]">
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
};

export default SliderTrack;