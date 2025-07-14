const StatsSkelton = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <div className="h-5 w-24 bg-gray-200 rounded-md"></div>
                <div className="h-8 w-16 bg-gray-300 rounded-md"></div>
              </div>
              <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <div className="h-6 w-6 bg-indigo-200 rounded-md"></div>
              </div>
            </div>
            <div className="mt-4 h-4 w-20 bg-gray-100 rounded-md"></div>
          </div>
        ))}
      </div>

      {/* Skeleton for other content sections */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 animate-pulse h-64"></div>
    </div>
  );
};

export default StatsSkelton;
