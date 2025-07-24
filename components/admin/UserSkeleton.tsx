"use client";

import React from "react";

export default function UserSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Array.from({ length: count }).map((_, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 bg-gray-200 rounded-full" />
                    <div>
                      <div className="h-4 w-32 bg-gray-200 rounded mb-1" />
                      <div className="h-3 w-24 bg-gray-200 rounded" />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-4 w-40 bg-gray-200 rounded" />
                </td>
                <td className="px-6 py-4">
                  <div className="h-5 w-16 bg-gray-200 rounded-full" />
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <div className="h-6 w-6 bg-gray-200 rounded" />
                    <div className="h-6 w-6 bg-gray-200 rounded" />
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
