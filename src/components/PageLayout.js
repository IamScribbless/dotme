import React from "react";
import Nav from "./Nav";

const PageLayout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-200">
      <Nav />
      {children}
    </div>
  );
};

export default PageLayout;
