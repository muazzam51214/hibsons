"use client";
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';

const CurrentOpeningsSkeleton = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-gray-200 rounded-full mb-4 w-24 h-6 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded-lg w-3/4 mx-auto animate-pulse"></div>
        </div>

        {/* Job Cards Skeleton */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="mb-4 md:mb-0 w-full">
                  {/* Job Title */}
                  <div className="h-7 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
                  
                  {/* Job Details */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <div className="mr-2">
                          {i === 0 && <FiBriefcase className="text-gray-300" />}
                          {i === 1 && <FiMapPin className="text-gray-300" />}
                          
                          {i === 3 && <FiClock className="text-gray-300" />}
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Apply Button */}
                <div className="h-10 bg-gray-200 rounded-lg w-28"></div>
              </div>
              
              {/* Description & Tags */}
              <div className="border-t border-gray-100 pt-4">
                <div className="space-y-2 mb-4">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-6 bg-gray-200 rounded-full w-16"></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default CurrentOpeningsSkeleton;