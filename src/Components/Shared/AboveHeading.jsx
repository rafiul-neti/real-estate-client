import React from "react";

const AboveHeading = ({children}) => {
  return (
    <p className="text-center">
      <span className="text-primary font-bold bg-blue-100 px-5 py-2.5 rounded-3xl">
        {children}
      </span>
    </p>
  );
};

export default AboveHeading;
