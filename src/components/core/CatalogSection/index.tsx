import ProductCard from "../ProductCard";
import { products } from "../../../lib/products";
import Typography from "../../ui/Typography";

const CatalogSection = () => {
  return (
    <section className="w-full px-6 py-10 font-montserrat">
      <Typography type="h2" variant="36-900" color="secondary" className="mb-6">
        Каталог товаров
      </Typography>

      <div className="grid grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;