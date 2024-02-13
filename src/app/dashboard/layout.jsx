"use client";

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

import Link from "next/link";
import { DLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { CheckToken } from "@/hooks/auth/check-token";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const { user } = CheckToken();

  useEffect(() => {
    user?.role !== "admin" && router.push("/");
  });

  const handleLogOut = async () => {
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <>
      <div className="flex h-screen bg-primary">
        <div className="w-40 md:w-80 px-4 py-8 text-white">
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col space-y-6">
              <h2 className="text-2xl font-extrabold">N-Leaf</h2>
              <nav className="flex flex-col space-y-1">
                {DLINKS.map((link) => {
                  return (
                    <Link
                      key={link.title}
                      href={link.url}
                      className={`link ${
                        pathname === link.url
                          ? "inline-flex bg-gray-900/20 rounded font-bold px-4 py-2 hover:bg-gray-900/20"
                          : "inline-flex text-gray-300 h-10 rounded font-bold px-4 py-2 hover:text-white hover:bg-gray-900/20"
                      }`}
                    >
                      <div className="flex gap-3">
                        {link.icon}
                        {link.title}
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="text-primary font-extrabold w-full"
                  >
                    Log Out
                  </Button>
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
        </div>
        <div className="m-2 w-full rounded bg-white">{children}</div>
      </div>
    </>
  );
}
