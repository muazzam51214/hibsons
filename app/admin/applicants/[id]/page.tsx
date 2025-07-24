"use client";
import { useState, useEffect } from "react";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { IApplicant } from "@/models/Applicant";
import ApplicantList from "@/components/admin/ApplicantList";
import ApplicantSkeleton from "@/components/admin/ApplicantSkeleton";
import { useParams } from "next/navigation";
import { IJob } from "@/models/Job";
import { Question } from "@/types/job";

export default function ApplicantPage() {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const jobId = params.id as string;

  const fetchApplicants = async () => {
    try {
      const res = await api.get<IApplicant[]>(
        `/api/jobs/${jobId}/applications`
      );
      const resQuestion = await api.get<Question[]>(`/api/jobs/${jobId}/questions`);
      
      setApplicants(res.data);
      setQuestions(resQuestion.data);
    } catch (error) {
      toast.error("Failed to fetch Applicants");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  if (loading) {
    return <ApplicantSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Application Management</h1>
      </div>

      <ApplicantList 
      applicants={applicants} 
      questions={questions} 
      />
    </div>
  );
}
