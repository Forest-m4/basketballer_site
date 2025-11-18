import ProductCard from "../../components/core/ProductCard";
import { products } from "../../lib/products";

const CatalogSection = () => {
  return (
    <section className="w-full px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Каталог товаров</h2>

      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;