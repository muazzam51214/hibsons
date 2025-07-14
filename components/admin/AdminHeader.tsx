"use client";

import { FiMenu, FiSearch, FiBell } from "react-icons/fi";
import { useSidebarStore } from "@/store/sidebarStore";

export default function AdminHeader() {
  const toggleSidebar = useSidebarStore((state) => state.toggle);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left side: Menu toggle + search */}
        <div className="flex items-center space-x-4 flex-1">
          {/* Sidebar Toggle Button (Visible on small screens) */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <FiMenu className="text-gray-600" />
          </button>
        </div>

        {/* Right side: Bell + Avatar */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiBell className="text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-medium">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
