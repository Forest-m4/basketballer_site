import { type Product } from "../../../lib/products";
import Typography from "../../ui/Typography"; // путь к Typography

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-[260px] h-[360px] bg-white rounded-xl shadow p-4 flex flex-col font-montserrat">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-[180px] object-cover rounded-md"
      />

      <Typography type="h3" variant="16-900" className="mt-3">
        {product.title}
      </Typography>

      <Typography type="p" variant="12-400" color="secondary" className="mt-1">
        {product.description}
      </Typography>

      <Typography type="p" variant="18-700" className="mt-auto">
        {product.price} €
      </Typography>
    </div>
  );
};

export default ProductCard;