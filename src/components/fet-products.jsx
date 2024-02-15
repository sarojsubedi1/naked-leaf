"use client";

import Link from "next/link";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useProducts } from "@/lib/fetchers/products";

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
        {favoriteProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded-md w-72 md:w-80">
            <Link
              href={`/shop/${product._id}`}
              className="flex flex-col justify-between"
            >
              <div className="hover:zoom-out">
                <Image
                  priority
                  src={product.image}
                  alt="product image"
                  width={500}
                  height={500}
                  className="object-cover aspect-[4/5] w-full rounded-md"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-bold text-primary">
                  {product.title}
                </h3>
                <p className="text-gray-400">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
