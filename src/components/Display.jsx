import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayPage from "./DisplayPage";

const Display = () => {
  return (
    <div className="bg-[#121212] flex-1 m-2 px-6 pt-4 rounded-md text-white overflow-auto lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayPage />} />
      </Routes>
    </div>
  );
};

export default Display;
