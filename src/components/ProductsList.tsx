import ProductCard from "./ProductCard";
import { FormattedResponse } from "@/hooks/usePaginatedProducts";

const ProductsList = ({products} : {products: FormattedResponse}) => {
  return (
    <section className="grid grid-cols-2 lg:gap-6 gap-5 lg:grid-cols-3">
      {products.items.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};

export default ProductsList;
