import React, { useState } from "react";
import ImageSkeleton from "./design/ImageSkeleton";

const ImageLibrary = () => {
  const totalSkeletons = 100;
  const loadAmount = 27;
  const [visibleSkeletons, setVisibleSkeletons] = useState(loadAmount);

  const loadMoreSkeletons = () => {
    setVisibleSkeletons((prevCount) => prevCount + loadAmount);
  };

  return (
    <div className="flex flex-col items-center mt-10 mb-[2rem]">
      <div className="flex flex-wrap gap-3 justify-center">
        {Array.from({ length: visibleSkeletons }).map((_, index) => (
          <ImageSkeleton key={index} />
        ))}
      </div>
      {visibleSkeletons < totalSkeletons && (
        <button
          onClick={loadMoreSkeletons}
          className="mt-5 px-4 py-2 bg-white text-black font-bold rounded-md hover:bg-primary-dark transition-colors duration-200"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ImageLibrary;
