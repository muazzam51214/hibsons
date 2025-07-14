"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";

const useLogout = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      useAuthStore.getState().clearUser();
      await signOut({ redirect: false });
      toast.success("Signed out successfully");
      router.push("/login");
    } catch (error) {
      toast.error("Error signing out");
      console.error("Logout Error:", error);
    }
  };

  return handleSignOut;
};

export default useLogout;
