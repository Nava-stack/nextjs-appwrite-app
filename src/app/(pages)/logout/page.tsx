"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import appwriteService from "@/appwrite/config";

export default function LogoutPage() {
  const { setAuthStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    appwriteService.logout().then(() => {
      setAuthStatus(false);
      router.push("/");
    });
  });

  return <></>;
}
