"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const [authStatus] = useState(false);
  const router = useRouter();

  if (!authStatus) {
    router.replace("/login");

    return <></>;
  }

  return children;
};

export default ProtectedLayout;
