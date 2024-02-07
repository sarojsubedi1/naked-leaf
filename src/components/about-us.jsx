import AboutImage from "../../public/about.jpg";
import Image from "next/image";
export default function AboutUs() {
  return (
    <section className="w-full px-4 md:px-6 pt-10 pb-10 bg-lime-300">
      <h2 className="md:text-4xl text-2xl mb-10 text-center font-bold text-primary">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl text-justify">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
        <div>
          <Image
            alt="Tea Shop Image"
            className="mx-auto aspect-[5/3] overflow-hidden rounded-md object-cover object-center sm:w-full"
            height="300"
            src={AboutImage}
            width="500"
          />
        </div>
      </div>
    </section>
  );
}
