"use client";
import appwriteService from "@/appwrite/config";
import useAuth from "@/context/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, FormEvent } from "react";

export default function Signup() {
  const router = useRouter();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [error, setError] = useState("");

  const { setAuthStatus } = useAuth();

  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
}
