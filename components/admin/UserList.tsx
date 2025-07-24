"use client";
import { FiTrash2, FiFile, FiEdit2 } from "react-icons/fi";
import { format } from "date-fns";
import Link from "next/link";
import { UserNew } from "@/types/user";
import Image from "next/image";

export default function UserList({
  users,
  onDelete,
}: {
  users: UserNew[];
  onDelete: (id: string) => void;
}) {
  if (!users.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
        No user created yet.
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-indigo-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center text-indigo-600">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        Since: {user.createdAt ? format(new Date(user.createdAt), "MMM d, yyyy") : "N/A"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                      {user.email}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={
                      "px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full border bg-blue-500 text-white uppercase"
                    }
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <Link
                      href={`/admin/users/${user._id}/edit`}
                      className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-100 rounded-lg transition-colors"
                      title="Edit User"
                    >
                      <FiEdit2 className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => onDelete(user._id || "")}
                      className="p-2 text-red-600 hover:text-red-900 hover:bg-red-100 rounded-lg transition-colors cursor-pointer"
                      title="Delete"
                    >
                      <FiTrash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
