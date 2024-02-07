import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 text-green-900">
      <div className="h-24 w-24 text-primary" />
      <h1 className="text-9xl font-bold">404</h1>
      <p className="mt-4 text-xl">
        Oops! The page you were looking for could not be found.
      </p>
      <div className="flex items-center mt-8">
        <div className="h-6 w-6 text-primary mr-2" />
        <Button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/85">
          Go Back
        </Button>
      </div>
    </div>
  );
}
