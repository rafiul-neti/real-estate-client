import React from "react";

const PropertyCardSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-lg rounded-md animate-pulse">
      {/* Image skeleton */}
      <div className="h-48 bg-base-300 rounded-tl-md rounded-tr-md"></div>
      
      <div className="p-3">
        {/* Title skeleton */}
        <div className="h-6 bg-base-300 rounded-md mb-5 w-3/4 mx-auto"></div>
        
        {/* Posted by skeleton */}
        <div className="h-4 bg-base-300 rounded-md mb-2 w-1/2"></div>
        
        {/* Location skeleton */}
        <div className="flex gap-2 items-center mb-2">
          <div className="h-4 w-4 bg-base-300 rounded-full"></div>
          <div className="h-4 bg-base-300 rounded-md w-1/3"></div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px my-2 bg-base-300"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2 mb-2">
          <div className="h-3 bg-base-300 rounded-md w-full"></div>
          <div className="h-3 bg-base-300 rounded-md w-4/5"></div>
          <div className="h-3 bg-base-300 rounded-md w-3/5"></div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px my-2 bg-base-300"></div>
        
        {/* Bottom section skeleton */}
        <div className="flex justify-between items-center">
          <div>
            <div className="h-3 bg-base-300 rounded-md w-16 mb-1"></div>
            <div className="h-6 bg-base-300 rounded-md w-20"></div>
          </div>
          <div className="h-10 bg-base-300 rounded-md w-28"></div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;