"use client";
import Image from "next/image";
import { Star } from "lucide-react";
import SelectQty from "./select";
import AddToCart from "./add-to-cart";

export default function Product({ product }) {
  return (
    <section className="flex flex-col gap-10 p-6">
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid md:grid-cols-5 gap-3 items-start">
          <div className="md:col-span-4">
            <Image
              priority
              src={product.image}
              alt="product image"
              width={500}
              height={500}
              className="object-cover aspect-[4/5] bg-primary/20 h-auto w-full"
            />
          </div>
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className=" md:flex items-start">
            <div className="grid gap-4">
              <h1 className="font-bold text-3xl lg:text-4xl text-green-900 dark:text-green-100">
                {product.title}
              </h1>
              <div>
                <p className="text-green-800 line-clamp-3 md:line-clamp-none">
                  {product.dec}
                </p>
              </div>
            </div>
            <div className="text-4xl font-bold ml-auto text-green-900 dark:text-green-100">
              ${product.price}
            </div>
          </div>
          <div className="grid gap-4 md:gap-10">
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
