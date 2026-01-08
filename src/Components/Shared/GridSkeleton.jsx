import React from "react";

const GridSkeleton = ({ 
  count = 6, 
  SkeletonComponent, 
  gridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  gap = "gap-6" 
}) => {
  return (
    <div className={`grid ${gridCols} ${gap}`}>
      {Array.from({ length: count }, (_, index) => (
        <SkeletonComponent key={index} />
      ))}
    </div>
  );
};

export default GridSkeleton;