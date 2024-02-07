import Background from "../../../public/nleaf.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import CategoriesButton from "@/components/category-button";
import AboutUs from "@/components/about-us";
import WhyDrinkTea from "@/components/why-drink-tea";
import WhyUs from "@/components/why-us";
import FeaturedProducts from "@/components/fet-products";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-[80vh] bg-primary/50 flex items-center justify-center">
        <Image
          priority
          src={Background}
          alt="Background"
          quality={100}
          fill
          className="absolute inset-0 object-cover -z-50"
        />
        <div className="h-full flex flex-col items-center justify-center text-center px-4 py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Discover the World of Fine Teas
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200">
            Explore our curated selection of premium teas from around the world.
          </p>
          <div className="mt-8">
            <Link href="/shop">
              <Button className="h-12 px-8 hover:text-black hover:bg-white shadow transition-colors">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="md:m-10 m-2">
        <h2 className="md:text-4xl text-2xl font-bold  text-left text-primary">
          Featured Products
        </h2>
        <FeaturedProducts />
      </div>
      <WhyDrinkTea />
      <div className="py-10">
        <h2 className="md:text-4xl ml-10 text-2xl font-bold text-primary">
          Category
        </h2>
        <CategoriesButton />
      </div>
      <AboutUs />
      <WhyUs />
    </>
  );
}
