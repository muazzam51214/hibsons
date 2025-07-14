"use client";
import { FiEdit2, FiTrash2, FiEye, FiClock, FiBriefcase } from "react-icons/fi";
import { format } from "date-fns";
import { Job } from "@/types/job";
import Link from "next/link";

const statusStyles = {
  open: "bg-green-50 text-green-700 border-green-200",
  closed: "bg-gray-100 text-gray-700 border-gray-200",
};

const typeStyles = {
  "Full-time": "bg-blue-50 text-blue-700",
  "Part-time": "bg-purple-50 text-purple-700",
  Contract: "bg-orange-50 text-orange-700",
};

export default function JobList({
  jobs,
  onDelete,
}: {
  jobs: Job[];
  onDelete: (id: string) => void;
}) {
  if (!jobs.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
        No jobs posted yet.
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
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr
                key={job._id}
                className="hover:bg-indigo-50/50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                      <FiBriefcase className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {job.title}
                      </div>
                      <div className="text-sm text-gray-500">
                        {job.department} • {job.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-md ${
                        typeStyles[job.type as keyof typeof typeStyles]
                      }`}
                    >
                      {job.type}
                    </span>
                    <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md">
                      {job.experience}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <FiClock className="mr-1" />
                      {format(new Date(job.createdAt), "MMM d, yyyy")}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                      statusStyles[job.status as keyof typeof statusStyles]
                    }`}
                  >
                    {job.status === "open" ? "Active" : "Closed"}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button
                      className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-100 rounded-lg transition-colors"
                      title="View"
                    >
                      <FiEye className="h-5 w-5" />
                    </button>
                    <Link 
                      href={`/admin/jobs/${job._id}/edit`}
                      className="p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <FiEdit2 className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => onDelete(job._id)}
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
