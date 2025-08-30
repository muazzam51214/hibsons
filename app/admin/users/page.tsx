"use client";
import { useState, useEffect } from "react";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import UserList from "@/components/admin/UserList";
import { UserNew } from "@/types/user";
import Link from "next/link";
import UserSkeleton from "@/components/admin/UserSkeleton";

export default function UsersPage() {
  const [users, setUsers] = useState<UserNew[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await api.get<UserNew[]>("/api/users");
      

      setUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch Users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  const handleDelete = async (userId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirm) return;
    try {
      await api.delete(`/api/users/${userId}`);
      toast.success("User deleted successfully");
      await fetchUsers();
    } catch{
      toast.error("Failed to delete user");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Link
          href="/admin/users/create"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-center"
        >
          + Create New User
        </Link>
      </div>
      {loading ? <UserSkeleton /> : <UserList users={users} onDelete={handleDelete} />}
    </div>
  );
}
