"use client";
import ProductCard from "@/components/productCard";
import { Input } from "@/components/ui/input";
import { useProducts } from "@/features/product/use-products";
import { useState } from "react";

export default function Shop() {
  const [search, setSearch] = useState("");
  const { data, error } = useProducts();
  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <div className="m-10">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <Input
          type="text"
          className="bg-primary/20  mb-10"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard products={data} search={search} />
        </div>
      </div>
    </>
  );
}
