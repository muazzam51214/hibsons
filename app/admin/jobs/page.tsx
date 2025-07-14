"use client";
import JobList from "@/components/admin/JobList";
import JobsSkeleton from "@/components/admin/JobsSkeleton";
import { useState, useEffect } from "react";
import Link from "next/link";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { Job } from "@/types/job";

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get<Job[]>("/api/jobs");
        setJobs(res.data);
      } catch (error) {
        toast.error("Failed to fetch jobs");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <JobsSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Management</h1>
        <Link
          href="/admin/jobs/create"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl text-center"
        >
          + Post New Job
        </Link>
      </div>

      <JobList jobs={jobs} />
    </div>
  );
}
