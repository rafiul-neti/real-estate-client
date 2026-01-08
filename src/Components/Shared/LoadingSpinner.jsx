import React from "react";

const LoadingSpinner = ({ 
  size = "xl", 
  color = "primary", 
  fullScreen = false,
  message = "Loading..." 
}) => {
  const sizeClasses = {
    sm: "loading-sm",
    md: "loading-md", 
    lg: "loading-lg",
    xl: "loading-xl"
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary", 
    accent: "text-accent",
    neutral: "text-neutral",
    info: "text-info",
    success: "text-success",
    warning: "text-warning",
    error: "text-error"
  };

  if (fullScreen) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-100">
        <span className={`loading loading-spinner ${sizeClasses[size]} ${colorClasses[color]} mb-4`}></span>
        <p className="text-base-content/70 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <span className={`loading loading-spinner ${sizeClasses[size]} ${colorClasses[color]} mb-2`}></span>
      <p className="text-base-content/70 text-xs">{message}</p>
    </div>
  );
};

export default LoadingSpinner;