"use client";
import { useEffect, useState } from "react";
import { FiFile } from "react-icons/fi";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "@/libs/axios";
import { UserInterface, UserUpdateInterface } from "@/types/user";
import FileUpload from "@/components/FileUpload";

export default function CreateUser() {
  const router = useRouter();
  const params = useParams();
  const userId = params.id as string;
  const [userData, setUserData] = useState<UserUpdateInterface>({
    name: "",
    email: "",
    role: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch job data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get(`/api/users/${userId}`);
        setUserData(res.data);
        
      } catch (err) {
        toast.error("Failed to load job data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await api.patch(`/api/users/${userId}`, userData);
      toast.success("User updated successfully!");
      router.push("/admin/users");
    } catch (err) {
      toast.error("Failed to update user");
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-10 bg-gray-200 rounded-lg"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Update User</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information Section */}
        <div className="border-b border-gray-200 pb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Fill Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Role *
              </label>
              <select
                id="role"
                name="role"
                value={userData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select Role</option>
                <option value="hr">HR</option>
                <option value="sales">Sales</option>
                <option value="associate">Associate</option>
                <option value="client">Client</option>
                <option value="admin">Admin</option>
              </select>
            </div>

           
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            disabled={submitting}
            className={`px-6 py-2 rounded-lg cursor-pointer text-white ${
              submitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {submitting ? "Updating User..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
}
