// components/admin/StatsCard.tsx
"use client";

const StatsCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) => {

  return (
    <div className="bg-indigo-50 text-indigo-600 rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
    </div>
  );
};

export default StatsCard;
