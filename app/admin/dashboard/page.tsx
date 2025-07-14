import StatsCard from "@/components/admin/StatsCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Users" value="1,240" icon="👥" />
        <StatsCard title="Active Jobs" value="89" icon="💼" />
        <StatsCard title="Revenue" value="$24K" icon="💰" />
        <StatsCard title="Pending" value="12" icon="⏳" />
        <StatsCard title="Total Users" value="1,240" icon="👥" />
        <StatsCard title="Active Jobs" value="89" icon="💼" />
        <StatsCard title="Revenue" value="$24K" icon="💰" />
        <StatsCard title="Pending" value="12" icon="⏳" />
      </div>
      {/* Other dashboard content */}
    </div>
  );
}
