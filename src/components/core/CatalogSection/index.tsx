import ProductCard from "../Card";
import { products } from "../../../lib/products";
import Typography from "../../ui/Typography";

const CatalogSection = () => {
  return (
    <section className="w-full px-6 py-10 font-montserrat">
      <Typography type="h2" variant="36-900" color="secondary" className="mb-6">
        Каталог товаров
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CatalogSection;