"use client";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Dashboard = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const handleLogout = async () => {
    useAuthStore.getState().clearUser();
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Role: {user?.role}</p>
      <p>Email: {user?.email}</p>
      <p>ID: {user?.id}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
