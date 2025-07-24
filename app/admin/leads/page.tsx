"use client";
import { useState, useEffect } from "react";
import api from "@/libs/axios";
import toast from "react-hot-toast";
import { ILead } from "@/models/Lead";
import LeadsSkeleton from "@/components/admin/LeadSkelton";
import LeadList from "@/components/admin/LeadList";

export default function LeadPage() {
  const [leads, setLeads] = useState<ILead[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchLeads = async () => {
    try {
      const res = await api.get<ILead[]>("/api/leads");
      setLeads(res.data);
    } catch (error) {
      toast.error("Failed to fetch leads");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      setLeads((prevLeads) =>
        prevLeads.map((lead) =>
          lead._id?.toString() === leadId
            ? { ...lead, status: newStatus }
            : lead
        )
      );

      // Make API call
      await api.patch(`/api/leads/${leadId}/status`, { status: newStatus });

      // Refresh data to ensure consistency
      await fetchLeads();
    } catch (error) {
      toast.error("Failed to update status");
      // Revert if API call fails
      await fetchLeads();
    }
  };

  const handleDelete = async (leadId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (!confirm) return;
    try {
      await api.delete(`/api/leads/${leadId}`);
      toast.success("Lead deleted successfully");
      await fetchLeads();
    } catch (error) {
      toast.error("Failed to delete lead");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lead Management</h1>
      </div>
      {loading ? (
        <LeadsSkeleton />
      ) : (
        <LeadList
          leads={leads}
          onDelete={handleDelete}
          userRole="admin"
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}