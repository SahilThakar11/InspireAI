import React, { useState } from "react";
import { filters } from "../constants";

const CommunityOptions = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex flex-wrap justify-center text-center gap-y-5 mt-5">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-md ml-10 text-sm lg:text-base ${
            activeFilter === filter
              ? "bg-color-1 text-white"
              : "bg-n-5 text-white hover:bg-n-6"
          } transition-colors duration-200 ease-in-out`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default CommunityOptions;
