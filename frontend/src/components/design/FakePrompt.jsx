import React from "react";
import Loader from "../shared/Loader";

const FakePrompt = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/90 rounded-xl ${
        className || ""
      } text-base`}
    >
      <div className="mr-4">
        <Loader />
      </div>
      Inspiring Images For You
    </div>
  );
};

export default FakePrompt;
