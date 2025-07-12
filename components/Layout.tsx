"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      {!isDashboard && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default Layout;
