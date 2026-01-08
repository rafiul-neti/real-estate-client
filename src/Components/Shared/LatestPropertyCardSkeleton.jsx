import React from "react";

const LatestPropertyCardSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-lg rounded-lg overflow-hidden animate-pulse">
      <div className="flex flex-col lg:flex-row">
        {/* Image skeleton */}
        <div className="lg:w-1/3">
          <div className="h-48 lg:h-full bg-base-300"></div>
        </div>
        
        {/* Content skeleton */}
        <div className="lg:w-2/3 p-6">
          {/* Title skeleton */}
          <div className="h-6 bg-base-300 rounded-md mb-4 w-3/4"></div>
          
          {/* Price skeleton */}
          <div className="h-5 bg-base-300 rounded-md mb-3 w-1/4"></div>
          
          {/* Location skeleton */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-4 w-4 bg-base-300 rounded-full"></div>
            <div className="h-4 bg-base-300 rounded-md w-1/3"></div>
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-2 mb-4">
            <div className="h-3 bg-base-300 rounded-md w-full"></div>
            <div className="h-3 bg-base-300 rounded-md w-5/6"></div>
            <div className="h-3 bg-base-300 rounded-md w-4/6"></div>
          </div>
          
          {/* Features skeleton */}
          <div className="flex gap-4 mb-4">
            <div className="h-4 bg-base-300 rounded-md w-16"></div>
            <div className="h-4 bg-base-300 rounded-md w-20"></div>
            <div className="h-4 bg-base-300 rounded-md w-18"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="h-10 bg-base-300 rounded-md w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default LatestPropertyCardSkeleton;