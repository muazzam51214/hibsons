export default function JobsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-6 space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-6 bg-gray-100 rounded-md animate-pulse"
              ></div>
            ))}
          </div>
          
          {/* Table Rows */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 pt-4">
              <div className="h-5 bg-gray-100 rounded-md animate-pulse"></div>
              <div className="h-5 w-16 bg-gray-100 rounded-md animate-pulse"></div>
              <div className="h-5 w-12 bg-gray-100 rounded-md animate-pulse"></div>
              <div className="h-5 w-20 bg-gray-100 rounded-md animate-pulse"></div>
              <div className="flex justify-end space-x-2">
                <div className="h-5 w-5 bg-gray-100 rounded-full animate-pulse"></div>
                <div className="h-5 w-5 bg-gray-100 rounded-full animate-pulse"></div>
                <div className="h-5 w-5 bg-gray-100 rounded-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}