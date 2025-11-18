import { type Product } from "../../../lib/products";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="w-[260px] h-[360px] bg-white rounded-xl shadow p-4 flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-[180px] object-cover rounded-md"
      />

      <h3 className="font-semibold text-lg mt-3">{product.title}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="mt-auto font-bold text-xl">{product.price} €</div>
    </div>
  );
};

export default ProductCard;
