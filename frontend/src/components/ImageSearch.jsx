import React from "react";
import Heading from "./shared/Heading";

const ImageSearch = () => {
  return (
    <div>
      <Heading
        title="InspireAI Community Gallery"
        text="Showcase Your Creations, Share the Inspiration"
      />
      <div className="flex justify-center items-center w-[80%] mx-auto lg:-mt-[4rem]">
        <input
          type="text"
          placeholder="Search for images"
          className="border-2 w-full border-gray-300 bg-n-7 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
      </div>
    </div>
  );
};

export default ImageSearch;
