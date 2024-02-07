"use client";
import { useCart } from "@/utils/cartContext";
import { Badge } from "./ui/badge";

export default function CartCout() {
  const { cart } = useCart();

  return (
    <>
      {cart.length > 0 && (
        <Badge className="bg-primary px-1.5 text-[0.6rem] text-white hover:bg-primary absolute top-0 right-0 rounded-full">
          {cart.length}
        </Badge>
      )}
    </>
  );
}
