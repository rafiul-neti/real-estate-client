import React from "react";

const AgentCardSkeleton = () => {
  return (
    <div className="bg-base-100 shadow-lg rounded-lg p-6 animate-pulse">
      {/* Agent image skeleton */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 bg-base-300 rounded-full"></div>
      </div>
      
      {/* Agent name skeleton */}
      <div className="h-5 bg-base-300 rounded-md mb-2 w-3/4 mx-auto"></div>
      
      {/* Agent title/role skeleton */}
      <div className="h-4 bg-base-300 rounded-md mb-4 w-1/2 mx-auto"></div>
      
      {/* Contact info skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-base-300 rounded-md w-full"></div>
        <div className="h-3 bg-base-300 rounded-md w-4/5 mx-auto"></div>
      </div>
      
      {/* Button skeleton */}
      <div className="h-10 bg-base-300 rounded-md w-full"></div>
    </div>
  );
};

export default AgentCardSkeleton;