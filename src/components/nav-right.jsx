"use client";
import Link from "next/link";

import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import { CheckToken } from "@/hooks/auth/check-token";
import { useAuth } from "@/lib/fetchers/users/use-auth";

export default function NavRight() {
  const { user, isAuthenticated } = CheckToken();

  if (isAuthenticated) {
    return <Avata id={user.id} />;
  }
  return (
    <>
      <div className="w-full flex justify-between md:gap-6">
        <Link href="/signin">
          <Button variant="outline">Sign In</Button>
        </Link>
        <Link href="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </>
  );
}

const Avata = ({ id }) => {
  const { data, error } = useAuth(id);

  if (!data && !error) {
    return (
      <div className="h-10 w-10">
        <AvatarSkeleton />
      </div>
    );
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <Link href={`/profile/${data.id}`} className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage
            src={data.profile}
            alt="User profile"
            width={50}
            height={50}
            className="w-10 h-10 rounded-full"
          />
          <AvatarFallback className="h-10 w-10">
            <AvatarSkeleton />
          </AvatarFallback>
        </Avatar>
        <p className="md:hidden">{data.name}</p>
      </Link>
    </>
  );
};
const shimmer = `
  relative overflow-hidden
  before:content-['']
  before:absolute before:inset-0 before:-translate-x-full
  before:animate-shimmer
  before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent
`;

function AvatarSkeleton() {
  return (
    <div
      className={`h-full w-full relative rounded-full bg-primary ${shimmer}`}
    />
  );
}
