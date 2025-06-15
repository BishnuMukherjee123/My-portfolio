import React from "react";

function Probtn({ x1 }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-[#E5E7EB] text-[#4B5563] dark:bg-[#374151] dark:text-[#D1D5DB] px-3 py-1 rounded-full text-sm">{x1}</span>
      </div>
    </>
  );
}

export default Probtn;
