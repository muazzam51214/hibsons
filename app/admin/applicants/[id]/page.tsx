"use client";
import { useState, useEffect } from "react";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { IApplicant } from "@/models/Applicant";
import ApplicantList from "@/components/admin/ApplicantList";
import ApplicantSkeleton from "@/components/admin/ApplicantSkeleton";
import { useParams } from "next/navigation";
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
      const resQuestion = await api.get<Question[]>(
        `/api/jobs/${jobId}/questions`
      );

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

  const handleStatusChange = async (applicantId: string, newStatus: string) => {
    try {
      setApplicants((prevApplicant) =>
        prevApplicant.map((app) =>
          app._id?.toString() === applicantId
            ? { ...app, status: newStatus }
            : app
        )
      );

      await api.patch(`/api/application/${applicantId}/status`, {
        status: newStatus,
      });
      await fetchApplicants();
    } catch{
      toast.error("Failed to update status");
      await fetchApplicants();
    }
  };

  const handleDelete = async (applicantId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this applicant?"
    );
    if (!confirm) return;
    try {
      await api.delete(`/api/application/${applicantId}`);
      toast.success("Applicant deleted successfully");
      await fetchApplicants();
    } catch{
      toast.error("Failed to delete applicant");
    }
  };

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
        onDelete={handleDelete}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
