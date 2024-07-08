import { Product, products } from "@/constants";
import ProductCard from "./ProductCard";

const ProductsList = ({products} : {products: Product[]}) => {
  return (
    <section className="grid grid-cols-2 lg:gap-6 gap-5 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
        />
      ))}
    </section>
  );
};

export default ProductsList;
