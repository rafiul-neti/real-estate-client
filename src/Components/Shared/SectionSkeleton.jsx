import React from "react";

const SectionSkeleton = ({ 
  showTitle = true, 
  showSubtitle = true,
  children,
  className = "my-20"
}) => {
  return (
    <section className={className}>
      <div className="text-center mb-8 animate-pulse">
        {showSubtitle && (
          <div className="h-4 bg-base-300 rounded-md w-32 mx-auto mb-2"></div>
        )}
        {showTitle && (
          <div className="h-8 bg-base-300 rounded-md w-48 mx-auto mb-4"></div>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionSkeleton;