"use client";

import {
  FiPhone,
  FiMail,
  FiGlobe,
  FiClock,
  FiTrash2,
  FiChevronDown,
  FiEye,
  FiX,
  FiUser,
  FiFile,
} from "react-icons/fi";
import { format } from "date-fns";
import { ILead } from "@/models/Lead";
import toast from "react-hot-toast";
import { useState } from "react";
import { BiBuilding } from "react-icons/bi";

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

  const [selectedLead, setSelectedLead] = useState<ILead | null>(null);

  if (!leads.length) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 text-center text-gray-500">
        No leads submitted yet.
      </div>
    );
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lead
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Information
                </th>
                <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Services
                </th>
                <th className="w-[250px] px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                  <td className="px-3 py-3">
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
                  <td className="px-3 py-3">
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
                  <td className="w-[250px] px-3 py-3">
                    <div className="relative">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          handleStatusSelect(
                            lead._id!.toString(),
                            e.target.value
                          )
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
                  <td className="px-3 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-100 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <FiEye className="h-5 w-5" />
                      </button>
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
      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium text-gray-900">
                  Lead Details
                </h3>
                <button
                  onClick={() => setSelectedLead(null)}
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
                      {selectedLead.contactPerson} - {selectedLead.companyName}
                    </h4>
                    <p className="text-sm text-gray-500">
                      Preffered Date Time{" "}
                      {format(
                        new Date(selectedLead.prefferedDateTime),
                        "MMM d, yyyy 'at' h:mm a"
                      )}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">
                    Information
                  </h4>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiUser className="mr-2 text-gray-400" />
                    {selectedLead.contactPerson}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <BiBuilding className="mr-2 text-gray-400" />
                    {selectedLead.companyName}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiMail className="mr-2 text-gray-400" />
                    {selectedLead.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiPhone className="mr-2 text-gray-400" />
                    {selectedLead.phone}
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiGlobe className="mr-2 text-gray-400" />
                    <a
                      href={selectedLead.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Website
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-900">
                    <FiFile className="mr-2 text-gray-400" />
                    {selectedLead.note}
                  </div>
                </div>

                <div className="col-span-2 space-y-2">
                  <h4 className="text-sm font-medium text-gray-500">
                    Lead Status
                  </h4>
                  <span
                    className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full border ${
                      statusStyles[
                        selectedLead.status as keyof typeof statusStyles
                      ]
                    }`}
                  >
                    {selectedLead.status.replace("_", " ")}
                  </span>
                </div>

                {selectedLead.serviceInterested &&
                  selectedLead.serviceInterested.length > 0 && (
                    <div className="col-span-2 space-y-2">
                      <h4 className="text-sm font-medium text-gray-500">
                        Services Interested
                      </h4>
                      <div className="space-y-3">
                        {selectedLead.serviceInterested.map(
                          (service, index) => (
                            <div
                              key={index}
                              className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg"
                            >
                              {service}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
