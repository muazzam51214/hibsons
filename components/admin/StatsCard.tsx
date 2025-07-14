'use client';

import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: ReactNode;        // ← accepts a React element, not a string
}

export default function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <div className="bg-indigo-50 text-indigo-600 rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>

        {/* Icon element */}
        <span className="text-3xl leading-none">{icon}</span>
      </div>
    </div>
  );
}