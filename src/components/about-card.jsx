import { Button } from "./ui/button";

function AboutCard(props) {
  return (
    <>
      <div
        className={`relative w-full md:w-96 rounded-lg border p-6 drop-shadow-lg ${props.bg}`}
      >
        <h2 className="mt-10 mb-5 text-center font-extrabold text-gray-900">
          {props.heading}
        </h2>
        <p className="line-clamp-2 my-3 text-justify  text-xs text-gray-500">
          {props.about}
        </p>
        <div className="flex justify-center">
          <Button variant="outline">Read more</Button>
        </div>
        <div
          className={`absolute top-[-20%] left-40 grid h-20 w-20 place-items-center rounded-full border ${props.bg}`}
        >
          {props.icon}
        </div>
      </div>
    </>
  );
}

export default AboutCard;
