"use client";

import Link from "next/link";
import { DLINKS } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex h-screen bg-primary">
        <div className="w-40 md:w-80 px-4 py-8 text-white">
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
        </div>
        <div className="m-2 w-full rounded bg-white">{children}</div>
      </div>
    </>
  );
}
