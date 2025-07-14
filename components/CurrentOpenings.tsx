"use client"

import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { Job } from "@/types/job";
import { useEffect, useState } from "react";
import CurrentOpeningsSkeleton from "./CurrentOpeningsSkeleton";
import Link from "next/link";

const CurrentOpenings = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get<Job[]>("/api/jobs/open");
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
    return <CurrentOpeningsSkeleton />;
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Current Openings
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore remote opportunities to work with top marketing agencies
            through Hibsons
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <FiBriefcase className="mr-2 text-indigo-600" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FiMapPin className="mr-2 text-indigo-600" />
                      <span>{job.location}</span>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <FiClock className="mr-2 text-indigo-600" />
                      <span>{job.experience} experience</span>
                    </div>
                  </div>
                </div>
                <Link href={`/careers/${job.slug}/apply`} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap cursor-pointer">
                  Apply Now
                </Link>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                    {job.department}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                    {job.location}
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full">
                    {job.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default CurrentOpenings;
