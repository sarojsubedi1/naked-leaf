import { usePathname } from "next/navigation";
import Link from "next/link";
import { LINKS } from "@/lib/constants";

const Navlinks = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="max-md:hidden flex items-center">
        {LINKS.map((link) => {
          return (
            <Link
              key={link.title}
              href={link.url}
              className={`link ${
                pathname === link.url
                  ? "text-primary underline underline-offset-4 decoration-2 inline-flex h-10 items-center justify-center rounded-md font-bold px-4 py-2 hover:bg-gray-50"
                  : "text-primary hover:scale-105 hover:underline hover:underline-offset-4 hover:decoration-2 inline-flex h-10 w-max items-center justify-center rounded-md font-bold px-4 py-2 hover:bg-gray-50"
              }`}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navlinks;
