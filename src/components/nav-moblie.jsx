"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import Logo from "./logo";
const Cart = dynamic(() => import("./cart"), {
  ssr: false,
});

import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LINKS } from "@/lib/constants";
import NavRight from "./nav-right";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useCart } from "@/utils/cartContext";

const NavBarMobile = () => {
  const { resetCart } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogOut = async () => {
    Cookies.remove("token");
    resetCart();
    toast.success("Log out Sucessfully");
    router.refresh();
  };

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
            <SheetContent className="bg-white">
              <SheetHeader>
                <SheetTitle className="font-extrabold text-xl text-primary">
                  N-LEAF
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col justify-between h-[600px]">
                <div className="mt-5">
                  <NavRight />

                  <div className="flex flex-col gap-3 my-6">
                    {LINKS.map((link) => {
                      return (
                        <Link
                          key={link.title}
                          href={link.url}
                          className={`link ${
                            pathname === link.url
                              ? "underline font-extrabold"
                              : "text-primary font-bold"
                          }`}
                        >
                          {link.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="grid place-items-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button>Log Out</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>No</AlertDialogCancel>
                        <AlertDialogAction onClick={handleLogOut}>
                          Yes
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default NavBarMobile;
