"use client";
import { useState } from "react";
import { FiFile } from "react-icons/fi";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import api from "@/libs/axios";
import { UserInterface } from "@/types/user";
import FileUpload from "@/components/FileUpload";

export default function CreateUser() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserInterface>({
    name: "",
    email: "",
    password: "",
    role: "",
    avatar: "",
  });
  const [submitting, setSubmitting] = useState(false);

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
      const res = await api.post("/api/users", userData);
      toast.success("User created successfully!");
      router.push("/admin/users");
    } catch (err) {
      toast.error("Failed to create user");
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New User</h1>

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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
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

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Avatar (Image, max 5MB)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiFile className="h-5 w-5 text-gray-400" />
                </div>
                <FileUpload
                  fileType="image"
                  onSuccess={(uploadResponse) => {
                    setUserData((prev) => ({
                      ...prev,
                      avatar: uploadResponse.url,
                    }));
                  }}
                  onProgress={(progress) => {
                    console.log(`Upload progress: ${progress}%`);
                  }}
                />
              </div>
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
            {submitting ? "Creating User..." : "+ Create User"}
          </button>
        </div>
      </form>
    </div>
  );
}
