"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect } from "react";

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
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EditProfile } from "@/components/edit-profile";

import { CheckToken } from "@/hooks/auth/check-token";
import { useAuth } from "@/lib/fetchers/users/use-auth";
import { useCart } from "@/utils/cartContext";
import { useRouter } from "next/navigation";

const UserPage = ({ params }) => {
  const { resetCart } = useCart();
  const router = useRouter();
  const { user } = CheckToken();

  useEffect(() => {
    !user && router.push("/");
  });

  const handleLogOut = async () => {
    Cookies.remove("token");
    resetCart();
    window.location.reload();
  };

  const { data, error } = useAuth(params.id);

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <div className="flex justify-center h-[80vh]">
        <div className="grid w-full max-w-2xl p-6">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <Avatar className="h-20 w-20">
                {data.profile && (
                  <AvatarImage alt="user profile" src={data.profile} />
                )}
                <AvatarFallback>PF</AvatarFallback>
              </Avatar>
              <div className="grid gap-0.5 text-xs">
                <div className="font-bold text-xl">{data.name}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/cart">
                <Button variant="outline" className="w-full">
                  Your Cart
                </Button>
              </Link>
              <EditProfile data={data} />
            </div>
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
      </div>
    </>
  );
};

export default UserPage;
