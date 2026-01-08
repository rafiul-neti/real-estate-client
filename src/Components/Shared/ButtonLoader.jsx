import React from "react";

const ButtonLoader = ({ 
  loading = false, 
  children, 
  className = "", 
  disabled = false,
  loadingText = "Loading...",
  ...props 
}) => {
  return (
    <button 
      className={`btn ${className} ${loading ? 'loading' : ''}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonLoader;