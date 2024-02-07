"use client";

import { useEffect } from "react";
import { CheckToken } from "@/hooks/auth/check-token";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const { user } = CheckToken();

  useEffect(() => {
    user?.role !== "admin" && router.push("/");
  });

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
