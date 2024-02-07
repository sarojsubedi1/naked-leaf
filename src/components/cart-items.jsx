"use client";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { QuantitySelector } from "./quantity-selector";
import { useCart } from "@/utils/cartContext";
import { Button } from "./ui/button";

export default function CartProduct({ products }) {
  const { getCartTotal, removeFromCart } = useCart();
  const total = getCartTotal();

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  if (products.length > 0) {
    return (
      <>
        {products.map((product) => (
          <div key={product._id} className="border-b p-4">
            <div className="flex gap-4 justify-between">
              <div className="w-36">
                <Image
                  priority
                  src={product.image}
                  alt="product image"
                  width={500}
                  height={500}
                  className="object-cover h-auto w-full p-1"
                />
              </div>
              <div className="max-sm:text-sm flex-1">
                <h3 className="text-lg max-sm:textbase font-semibold">
                  {product.title}
                </h3>
                <p className="text-gray-600 max-sm:hidden">{product.dec}</p>
                <p>${product.price * product.cartQty}</p>
                <QuantitySelector product={product} />
              </div>
              <div className="flex flex-col justify-end">
                <Button
                  onClick={() => handleRemoveFromCart(product._id)}
                  className="bg-red-600 hover:bg-red-500 "
                >
                  <Trash2 className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        ))}
        <div className="p-3 flex justify-between bg-primary/10 mt-5">
          <div className="font-bold">Total</div>
          <div className="font-semibold">${total}</div>
        </div>
      </>
    );
  }
  return <p>nothing in cart</p>;
}
