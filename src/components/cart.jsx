"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import CartCout from "./cart-count";

export default function Cart() {
  return (
    <Link href="/cart">
      <div className="p-2 relative hover:bg-cst_background rounded-lg">
        <ShoppingCart className="text-primary" />
        <CartCout />
      </div>
    </Link>
  );
}
