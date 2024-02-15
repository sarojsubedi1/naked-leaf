"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
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
    <ScrollArea className="mt-10">
      <div className="flex w-max space-x-4 p-4">
        <ProductCard products={favoriteProducts} search={""} />
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
