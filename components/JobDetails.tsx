"use client";

import {
  FiCheck,
  FiMapPin,
  FiClock,
  FiUser,
  FiBriefcase,
} from "react-icons/fi";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { Job, JobData } from "@/types/job";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

const JobDetails = () => {
  const params = useParams();
  const jobSlug = params.slug as string;

  const [jobData, setJobData] = useState<JobData>({
    title: "",
    description: "",
    location: "",
    department: "",
    type: "",
    experience: "",
    status: "",
    questions: [],
  });
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch job data
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get(`/api/jobs/slug/${jobSlug}`);
        setJobData(res.data);
      } catch (err) {
        toast.error("Failed to load job data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobSlug]);

  if (loading) {
    return (
      <section className="py-12 bg-white animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Job Description Skeleton */}
            <div className="lg:w-3/5 space-y-6">
              <div>
                <div className="inline-block h-6 w-24 bg-gray-200 rounded-full mb-4"></div>
                <div className="h-8 md:h-10 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <FiMapPin className="text-gray-300" />
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiBriefcase className="text-gray-300" />
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiClock className="text-gray-300" />
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-11/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-10/12 bg-gray-200 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
              </div>
            </div>

            {/* Right Column - Apply Card Skeleton */}
            <div className="lg:w-2/5">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-6 space-y-6">
                <div className="h-6 w-1/2 bg-gray-200 rounded"></div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FiUser className="text-gray-300" />
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiClock className="text-gray-300" />
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiCheck className="text-gray-300" />
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="h-10 w-full bg-gray-300 rounded-lg mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Job Description (60%) */}
          <div className="lg:w-3/5">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full mb-4">
                {jobData.department}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                 {jobData.title}
              </h1>
              <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
                <div className="flex items-center">
                  <FiMapPin className="mr-2 text-indigo-600" />
                  <span> {jobData.location}</span>
                </div>
                <div className="flex items-center">
                  <FiBriefcase className="mr-2 text-indigo-600" />
                  <span> {jobData.type}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2 text-indigo-600" />
                  <span> {jobData.experience}</span>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-700 mb-6">
                 {jobData.description}
              </p>
            </div>
          </div>

          {/* Right Column - Apply Card (40%) */}
          <div className="lg:w-2/5">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Apply for this position
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <FiUser className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>24 applicants</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiClock className="w-5 h-5 text-indigo-600 mr-3" />
                  <span>Posted 2 weeks ago</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FiCheck className="w-5 h-5 text-indigo-600 mr-3" />
                  <span> {jobData.location}</span>
                </div>
              </div>

              <Link href={`/careers/${jobSlug}/apply`} className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl mb-4">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
