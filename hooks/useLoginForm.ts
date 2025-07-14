'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, getSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";

export function useLoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      ...formData,
      redirect: false,
    });

    if (result?.error) {
      toast.error(result.error || "Invalid credentials");
      setLoading(false);
      return;
    }

    toast.success("Login successful");

    // wait a bit for session to update
    setTimeout(async () => {
      const session = await getSession();
      const role = session?.user?.role;

      setUser({
        id: session?.user?.id,
        name: session?.user?.name || "",
        email: session?.user?.email || "",
        role,
      });

      if (role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }
    }, 500);
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
  };
}