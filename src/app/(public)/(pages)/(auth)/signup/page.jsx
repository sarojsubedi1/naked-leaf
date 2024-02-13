"use client";

import { useEffect } from "react";
import { CheckToken } from "@/hooks/auth/check-token";

import { toast } from "sonner";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { API_URL } from "@/lib/constants";

const Register = () => {
  const router = useRouter();
  const { user } = CheckToken();

  useEffect(() => {
    user && router.push("/");
  });

  const schema = z
    .object({
      username: z
        .string()
        .min(2, { message: "Username must be at least 2 character." })
        .max(50),
      password: z
        .string()
        .min(8, { message: "Password must be at least 8 character." })
        .max(50),
      cpassword: z.string(),
    })
    .refine((data) => data.password === data.cpassword, {
      message: "Password dot't match.",
      path: ["cpassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users`, userData);
      Cookies.set("token", `${response.data.token}`, { expires: 7 });
      window.location.reload();
      toast.success(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="h-[600px] w-[500px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pb-10">
              <div className="text-3xl font-bold text-primary md:pt-16 md:text-4xl ">
                Sign Up
              </div>
              <p className="text-sm text-gray-400">
                Welcome to Naked Leaf!please Sign up.
              </p>
            </div>

            <div>
              <label
                htmlFor="username"
                className="pb-4 font-extrabold text-primary"
              >
                Username
              </label>
              <input
                autoComplete="name"
                id="username"
                type="text"
                className="w-full rounded-md border border-primary p-2.5 outline-none"
                {...register("username")}
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>

            <div className="pt-8">
              <label
                htmlFor="password"
                className="pb-4  font-extrabold text-primary"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md border border-primary p-2.5 outline-none"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <div className="pt-8">
              <label
                htmlFor="cpassword"
                className="pb-4  font-extrabold text-primary"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className="w-full rounded-md border border-primary p-2.5 outline-none"
                {...register("cpassword")}
              />
              {errors.cpassword && (
                <p className="text-red-500">{errors.cpassword.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-md bg-primary hover:bg-primary/90 p-4 text-xl font-extrabold text-white"
            >
              Sign Up
            </button>
            <div className="pt-4 text-center text-sm  text-gray-400  ">
              <p>
                Don&apos;t have account?
                <Link href="/signin">
                  <span className="text-primary underline"> Sign In</span>.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
