"use client";

import useLogout from '@/hooks/useLogout';
import { useSidebarStore } from "@/store/sidebarStore";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiPieChart,
  FiSettings,
  FiX,
} from "react-icons/fi";

export default function AdminSidebar() {
  const { isOpen, close } = useSidebarStore();
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", icon: FiHome, href: "/admin/dashboard" },
    { name: "Users", icon: FiUsers, href: "/admin/users" },
    { name: "Jobs", icon: FiBriefcase, href: "/admin/jobs" },
    { name: "Analytics", icon: FiPieChart, href: "/admin/analytics" },
    { name: "Settings", icon: FiSettings, href: "/admin/settings" },
  ];


  const logout = useLogout();
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={close}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 w-64 h-full bg-white border-r border-gray-200 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Hibsons Admin</h1>
            <button
              onClick={close}
              className="md:hidden p-1 text-gray-500 hover:text-gray-700"
            >
              <FiX size={20} />
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  pathname === item.href
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={close}
              >
                <item.icon className="mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={logout}
              className="w-full flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <FiSettings className="mr-3" />
              Log Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
