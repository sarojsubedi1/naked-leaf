"use client";
import ProductCard from "@/components/productCard";
import { Input } from "@/components/ui/input";
import { useProducts } from "@/lib/fetchers/products";
import { useState } from "react";
import SelectCategory from "@/components/select-category";

export default function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { data, error } = useProducts();
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }
  const filteredProducts = data.filter((product) => {
    if (search) {
      return product.title.toLowerCase().includes(search.toLowerCase());
    }
    if (category) {
      return product.category === category;
    }
    return true;
  });

  return (
    <>
      <div className="m-10">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <div className="flex justify-between mb-10 border-b pb-3">
          <SelectCategory category={category} setCategory={setCategory} />
          <Input
            id="search"
            type="text"
            className="bg-primary/20 w-2/6"
            placeholder="Search Product"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard products={filteredProducts} />
        </div>
      </div>
    </>
  );
}
