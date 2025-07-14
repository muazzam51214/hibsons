"use client";
import StatsCard from "@/components/admin/StatsCard";
import api from "@/libs/axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DashboardStats } from "@/types/stats";
import { FiBriefcase, FiCheckCircle, FiFile, FiUserPlus } from "react-icons/fi";
import StatsSkelton from "@/components/admin/StatsSkelton";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get<DashboardStats>("/api/dashboard/stats");
        setStats(res.data);
      } catch (error) {
        toast.error("Failed to fetch dashboard stats");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <StatsSkelton />
    );
  }
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Jobs"
          value={stats?.totalJobs ?? 0}
          icon={<FiBriefcase />}
        />
        <StatsCard
          title="Active Jobs"
          value={stats?.activeJobs ?? 0}
          icon={<FiCheckCircle />}
        />
        <StatsCard
          title="New Leads"
          value={stats?.newLeads ?? 0}
          icon={<FiUserPlus />}
        />
        <StatsCard
          title="Total Applications"
          value={stats?.totalApplicants ?? 0}
          icon={<FiFile />}
        />
      </div>
      {/* Other dashboard content */}
    </div>
  );
}
