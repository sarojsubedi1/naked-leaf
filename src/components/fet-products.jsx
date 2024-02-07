"use client";
import ProductCard from "@/components/productCard";
import { useProducts } from "@/features/product/use-products";
export default function FeaturedProducts() {
  const { data, error } = useProducts();
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  const favoriteProducts = data.filter((product) => product.featured);
  return (
    <div className="mt-10">
      <ProductCard products={favoriteProducts} search={""} />
    </div>
  );
}
