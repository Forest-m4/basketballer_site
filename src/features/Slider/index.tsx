import { useState } from "react";
import ProductCard from "../../components/core/ProductCard";
import { products } from "../../lib/products";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < products.length - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="relative w-full overflow-hidden px-6 py-4">
      <div
        className="flex gap-6 transition-transform duration-300"
        style={{
          transform: 'translateX(-${index * 300}px)',
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-4 bg-black text-white px-4 py-2 rounded"
      >
        ←
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-4 bg-black text-white px-4 py-2 rounded"
      >
        →
      </button>
    </section>
  );
};

export default Slider;