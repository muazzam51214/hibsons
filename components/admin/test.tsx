"use client";

import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiClock,
  FiTrash2,
  FiChevronDown,
} from "react-icons/fi";
import { format } from "date-fns";
import { ILead } from "@/models/Lead";
import toast from "react-hot-toast";

const statusStyles = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  contacted: "bg-yellow-50 text-yellow-700 border-yellow-200",
  follow_up: "bg-purple-50 text-purple-700 border-purple-200",
  closed: "bg-gray-100 text-gray-700 border-gray-200",
};

const statusOptions = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "follow_up", label: "Follow Up" },
  { value: "closed", label: "Closed" },
];

export default function LeadList({
  leads,
  onDelete,
  userRole,
  onStatusChange,
}: {
  leads: ILead[];
  onDelete: (id: string) => void;
  userRole: string;
  onStatusChange: (id: string, status: string) => Promise<void>;
}) {
  const handleStatusSelect = async (leadId: string, newStatus: string) => {
    try {
      await onStatusChange(leadId, newStatus);
      toast.success("Status updated successfully");
    } catch{
      toast.error("Failed to update status");
    }
  };

  if (!leads.length) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        No leads submitted yet.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="w-[180px] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lead
              </th>
              <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Information
              </th>
              <th className="w-[120px] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Services
              </th>
              <th className="w-[150px] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="w-[150px] px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {leads.map((lead) => (
              <tr
                key={lead._id?.toString()}
                className="hover:bg-indigo-50/30 transition-colors"
              >
                <td className="w-[180px] px-3 py-3">
                  <div className="flex flex-col min-w-0">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {lead.contactPerson}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {lead.companyName}
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 text-sm text-gray-700 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <FiPhone className="text-gray-400 flex-shrink-0" />
                    <span>{lead.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail className="text-gray-400 flex-shrink-0" />
                    <span>{lead.email}</span>
                  </div>
                  {lead.websiteUrl && (
                    <div className="flex items-center gap-2">
                      <FiGlobe className="text-gray-400 flex-shrink-0" />
                      <a
                        href={lead.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline truncate"
                      >
                        {lead.websiteUrl.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <FiClock className="text-gray-400 flex-shrink-0" />
                    <span>
                      {format(
                        new Date(lead.prefferedDateTime),
                        "MMM d, yyyy 'at' h:mm a"
                      )}
                    </span>
                  </div>
                </td>
                <td className="w-[120px] px-3 py-3">
                  <div className="flex flex-wrap gap-1.5">
                    {lead.serviceInterested?.map((service, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-800 px-2.5 py-1 rounded-md text-xs truncate max-w-full"
                        title={service}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="w-[120px] px-3 py-3">
                  <div className="relative">
                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusSelect(lead._id!.toString(), e.target.value)
                      }
                      className={`appearance-none pl-3 pr-8 py-1 text-xs leading-4 font-semibold rounded-full border ${
                        statusStyles[lead.status as keyof typeof statusStyles]
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
                <td className="w-[150px] px-3 py-3 text-right">
                  <div className="flex justify-end space-x-2">
                    {userRole === "admin" && (
                      <button
                        onClick={() => onDelete(lead._id!.toString())}
                        className="p-1.5 text-red-600 hover:text-red-900 hover:bg-red-100 rounded transition-colors"
                        title="Delete Lead"
                      >
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
