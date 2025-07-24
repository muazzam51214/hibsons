"use client";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiBook,
  FiCalendar,
  FiLinkedin,
  FiFileText,
  FiEye,
  FiX,
  FiChevronDown,
  FiTrash2,
} from "react-icons/fi";
import { format } from "date-fns";
import { IApplicant } from "@/models/Applicant";
import { useState } from "react";
import { Question } from "@/types/job";
import toast from "react-hot-toast";

const statusStyles = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  under_review: "bg-yellow-50 text-yellow-700 border-yellow-200",
  interview: "bg-purple-50 text-purple-700 border-purple-200",
  selected: "bg-green-50 text-green-700 border-green-200",
  rejected: "bg-red-50 text-red-700 border-red-200",
};

const statusOptions = [
  { value: "new", label: "New" },
  { value: "under_review", label: "Under Review" },
  { value: "interview", label: "Interviewed" },
  { value: "selected", label: "Selected" },
  { value: "rejected", label: "Rejected" },
];

export default function ApplicantList({
  applicants,
  questions,
  onDelete,
  onStatusChange,
}: {
  applicants: IApplicant[];
  questions: Question[];
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: string) => Promise<void>;
}) {
  const handleStatusSelect = async (applicantId: string, newStatus: string) => {
    try {
      await onStatusChange(applicantId, newStatus);
      toast.success("Status updated successfully");
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const [selectedApplicant, setSelectedApplicant] = useState<IApplicant | null>(
    null
  );

  if (!applicants.length) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">
        No applicants found for this job.
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Education
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {applicants.map((applicant) => (
                <tr
                  key={applicant._id?.toString()}
                  className="hover:bg-indigo-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                        <FiUser className="h-5 w-5" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {applicant.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {format(new Date(applicant.dob), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {applicant.email}
                    </div>
                    <div className="text-sm text-gray-500">
                      {applicant.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">
                      {applicant.education}
                    </div>
                    <div className="text-sm text-gray-500">
                      {applicant.city}
                    </div>
                  </td>
                  <td className="px-3 py-3">
                    <div className="relative">
                      <select
                        value={applicant.status}
                        onChange={(e) =>
                          handleStatusSelect(
                            applicant._id!.toString(),
                            e.target.value
                          )
                        }
                        className={`appearance-none pl-3 pr-8 py-1 text-xs leading-4 font-semibold rounded-full border ${
                          statusStyles[
                            applicant.status as keyof typeof statusStyles
                          ]
                        } w-full cursor-pointer`}
                      >
                        {statusOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setSelectedApplicant(applicant)}
                        className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <FiEye className="h-5 w-5" />
                      </button>

                      <a
                        href={applicant.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-blue-500 hover:text-blue-700 hover:bg-blue-100 rounded-lg transition-colors"
                        title="LinkedIn Profile"
                      >
                        <FiLinkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={applicant.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-blue-600 hover:text-blue-900 hover:bg-blue-100 rounded-lg transition-colors"
                        title="View Resume"
                      >
                        <FiFileText className="h-5 w-5" />
                      </a>
                      <button
                        onClick={() => onDelete(applicant._id!.toString())}
                        className="p-1.5 text-red-600 hover:text-red-900 hover:bg-red-100 rounded transition-colors"
                        title="Delete Applicant"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Applicant Details Modal */}
      {selectedApplicant && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">
                  Applicant Details
                </h3>
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <FiX className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-2 flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                    <FiUser className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {selectedApplicant.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Applied on{" "}
                      {format(
                        new Date(selectedApplicant.createdAt || new Date()),
                        "MMM d, yyyy"
                      )}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">
                    Contact Information
                  </h4>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiMail className="mr-2 text-gray-400" />
                    {selectedApplicant.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiPhone className="mr-2 text-gray-400" />
                    {selectedApplicant.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiMapPin className="mr-2 text-gray-400" />
                    {selectedApplicant.address}, {selectedApplicant.city}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">
                    Personal Information
                  </h4>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiCalendar className="mr-2 text-gray-400" />
                    Date of Birth:{" "}
                    {format(new Date(selectedApplicant.dob), "MMM d, yyyy")}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiBook className="mr-2 text-gray-400" />
                    Education: {selectedApplicant.education}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiLinkedin className="mr-2 text-gray-400" />
                    <a
                      href={selectedApplicant.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">
                    Application Status
                  </h4>
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                      statusStyles[
                        selectedApplicant.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {selectedApplicant.status.replace("_", " ")}
                  </span>
                </div>

                {selectedApplicant.answers &&
                  selectedApplicant.answers.length > 0 && (
                    <div className="col-span-2 space-y-2">
                      <h4 className="text-sm font-medium text-gray-500">
                        Application Answers
                      </h4>
                      <div className="space-y-3">
                        {selectedApplicant.answers.map((answer, index) => (
                          <div
                            key={index}
                            className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg"
                          >
                            <p>
                              Q#{index + 1} {questions[index].text}
                            </p>
                            <p>
                              <strong>{answer}</strong>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div className="col-span-2 flex justify-end space-x-3 pt-4">
                  <a
                    href={selectedApplicant.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    <FiFileText className="mr-2" />
                    View Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
