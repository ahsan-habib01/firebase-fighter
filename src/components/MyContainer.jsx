import React from "react";

const MyContainer = ({ className, children }) => {
  return <div className={`${className} w-11/12 mx-auto`}>
    {children}
    </div>;
};

export default MyContainer;
