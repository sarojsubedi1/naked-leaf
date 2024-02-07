import AboutCard from "@/components/about-card";
import { ThumbsUp, Tags, Truck, HelpingHand } from "lucide-react";

export default function WhyUs() {
  return (
    <>
      <div>
        <h3 className="text-2xl md:text-4xl text-primary my-10 font-bold text-center">
          Why Us?
        </h3>
        <div className="my-24 flex flex-col items-center gap-y-24 lg:mx-12 lg:grid lg:grid-cols-3 lg:gap-x-12">
          <AboutCard
            heading="Great Prices and discounts"
            about="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            icon={<Tags className="text-emerald-700" />}
            bg="bg-emerald-50"
          />
          <AboutCard
            heading="Great Daily deals"
            about="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            icon={<ThumbsUp className="text-blue-700" />}
            bg="bg-blue-50"
          />
          <AboutCard
            heading="Free Delivery"
            about="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            icon={<Truck className="text-yellow-700" />}
            bg="bg-yellow-50"
          />
          <AboutCard
            heading="Easy Return"
            about="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
            icon={<HelpingHand className="text-fuchsia-700" />}
            bg="bg-fuchsia-50"
          />
        </div>
      </div>
    </>
  );
}
