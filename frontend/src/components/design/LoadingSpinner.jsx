import React from "react";

const LoadingSpinner = () => {
  return (
    <>
      <div className="text-center">
        <div className="relative w-[calc(3_*_30px_+_26px)] h-[calc(2_*_30px_+_26px)] mx-auto my-2.5">
          <div
            id="square1"
            className="absolute inline-block w-[26px] h-[26px] bg-white rounded-sm animate-square1"
          ></div>
          <div
            id="square2"
            className="absolute inline-block w-[26px] h-[26px] bg-white rounded-sm animate-square2"
          ></div>
          <div
            id="square3"
            className="absolute inline-block w-[26px] h-[26px] bg-white rounded-sm animate-square3"
          ></div>
          <div
            id="square4"
            className="absolute inline-block w-[26px] h-[26px] bg-white rounded-sm animate-square4"
          ></div>
          <div
            id="square5"
            className="absolute inline-block w-[26px] h-[26px] bg-white rounded-sm animate-square5"
          ></div>
        </div>
        <span className="text-2xl mt-5">InspireAI Is Thinking</span>
      </div>
    </>
  );
};

export default LoadingSpinner;
