import React from "react";

const PropertyDetailsSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Main property section */}
      <section className="mt-10 container mx-auto flex flex-col lg:flex-row items-center gap-5 p-2 lg:p-0">
        {/* Image skeleton */}
        <div className="flex-1">
          <div className="h-64 lg:h-96 bg-base-300 rounded-lg"></div>
        </div>
        
        {/* Details skeleton */}
        <div className="flex-1 space-y-7">
          {/* Title skeleton */}
          <div className="h-8 bg-base-300 rounded-md w-3/4"></div>
          
          {/* Price skeleton */}
          <div className="h-6 bg-base-300 rounded-md w-1/3"></div>
          
          {/* Location skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 bg-base-300 rounded-full"></div>
            <div className="h-4 bg-base-300 rounded-md w-1/2"></div>
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-3">
            <div className="h-4 bg-base-300 rounded-md w-full"></div>
            <div className="h-4 bg-base-300 rounded-md w-5/6"></div>
            <div className="h-4 bg-base-300 rounded-md w-4/6"></div>
            <div className="h-4 bg-base-300 rounded-md w-3/6"></div>
          </div>
          
          {/* Features skeleton */}
          <div className="grid grid-cols-2 gap-4">
            <div className="h-4 bg-base-300 rounded-md"></div>
            <div className="h-4 bg-base-300 rounded-md"></div>
            <div className="h-4 bg-base-300 rounded-md"></div>
            <div className="h-4 bg-base-300 rounded-md"></div>
          </div>
          
          {/* Button skeleton */}
          <div className="h-12 bg-base-300 rounded-md w-40"></div>
        </div>
      </section>
      
      {/* Ratings section skeleton */}
      <section className="mt-16 container mx-auto p-2 lg:p-0">
        <div className="h-6 bg-base-300 rounded-md w-48 mb-6"></div>
        
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-base-100 p-4 rounded-lg shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-base-300 rounded-full"></div>
                <div>
                  <div className="h-4 bg-base-300 rounded-md w-24 mb-1"></div>
                  <div className="h-3 bg-base-300 rounded-md w-16"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-base-300 rounded-md w-full"></div>
                <div className="h-3 bg-base-300 rounded-md w-4/5"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PropertyDetailsSkeleton;