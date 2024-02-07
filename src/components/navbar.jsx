"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

import Logo from "./logo";
import Navlinks from "./navlinks";
const Cart = dynamic(() => import("./cart"), {
  ssr: false,
});
const NavRight = dynamic(() => import("./nav-right"), {
  ssr: false,
});

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 border-b bg-white z-50">
        <div className="flex justify-between py-3 md:mx-10 mx-2">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <Navlinks />
          <div className="flex gap-4">
            <Cart />
            <div className="flex pl-3 max-md:hidden justify-between gap-3">
              <NavRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
