"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React from "react";
import Login from "@/components/Login";

export default function LoginPage() {
  const { authStatus } = useAuth();
  const router = useRouter();

  if (authStatus) {
    router.replace("/profile");
    return <></>;
  }

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <Login />
    </section>
  );
}
