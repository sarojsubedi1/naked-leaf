"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";

const EditUser = ({ data }) => {
  console.log(data);
  const schema = z.object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 character." })
      .max(50),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: `${data.name}`,
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <div className="bg-green-100">
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
        <div className="bg-sky-100">
          {data.profile && (
            <Image
              src={data.profile}
              alt="User Profile"
              width={500}
              height={500}
              className="w-auto h-auto rounded-full"
            />
          )}
        </div>
      </div>
      <Button onClick={handleSubmit}>Update</Button>
    </>
  );
};

export default EditUser;
