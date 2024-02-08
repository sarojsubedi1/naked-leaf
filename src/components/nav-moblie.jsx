"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import Logo from "./logo";
const Cart = dynamic(() => import("./cart"), {
  ssr: false,
});

import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/lib/constants";

const NavBarMobile = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="z-50 bg-white border-b border-gray-200 px-3 flex justify-between sticky inset-0 md:hidden">
        <Link href="/" className="flex items-center my-3">
          <Logo />
        </Link>
        <div className="flex gap-3 items-center">
          <Cart />
          <Sheet>
            <SheetTrigger asChild>
              <div className="grid place-items-center">
                <Menu />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-primary">
              <SheetHeader>
                <SheetTitle className="font-extrabold text-xl text-white">
                  N-LEAF
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-3 my-6">
                {LINKS.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      href={link.url}
                      className={`link ${
                        pathname === link.url
                          ? "underline font-extrabold"
                          : "text-white font-bold"
                      }`}
                    >
                      {link.title}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
