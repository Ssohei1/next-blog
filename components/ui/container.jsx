import React from "react";

const Container = ({ classname, children, isFullHeight }) => {
  return (
    <div
      className={`md:px-4, mx-auto max-w-7xl px-6 ${classname} ${isFullHeight ? "h-full" : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
