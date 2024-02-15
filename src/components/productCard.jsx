"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ products }) {
  return (
    <>
      {products?.map((product) => (
        <div key={product._id} className="border p-4 rounded-md">
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
    </>
  );
}
