"use client";
import { useCart } from "@/utils/cartContext";
import { Badge } from "./ui/badge";
import { useCarts } from "@/lib/fetchers/cart";
import { CheckToken } from "@/hooks/auth/check-token";

export default function CartCout() {
  const { isAuthenticated } = CheckToken();
  const { data } = useCarts();
  const { cart } = useCart();

  let count;
  if (isAuthenticated && data) {
    count = data.items.length;
  } else {
    count = cart.length;
  }

  return (
    <>
      {count > 0 && (
        <Badge className="bg-primary px-1.5 text-[0.6rem] text-white hover:bg-primary absolute top-0 right-0 rounded-full">
          {count}
        </Badge>
      )}
    </>
  );
}
